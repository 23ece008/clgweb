const https = require('https');
const fs = require('fs');
const path = require('path');
const { imageUrls } = require('../src/data/imageUrls');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${url}: ${response.statusCode}`);
        reject(new Error(`HTTP Status Code: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const downloads = [];
  const processUrls = (obj, category) => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && value.startsWith('http')) {
        const filename = path.basename(new URL(value).pathname);
        const filepath = path.join(__dirname, '..', 'src', 'assets', 'images', category, filename);
        downloads.push(downloadImage(value, filepath));
      } else if (typeof value === 'object') {
        processUrls(value, key);
      }
    }
  };

  processUrls(imageUrls, '');
  
  try {
    await Promise.all(downloads);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Some downloads failed:', error);
  }
};

downloadAllImages();
