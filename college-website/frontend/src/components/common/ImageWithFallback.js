import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { imageUrls } from '../../data/imageUrls';

const ImageWithFallback = ({
  src,
  alt,
  fallbackType = 'campus',
  sx = {},
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Box position="relative" {...props}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <Box
        component="img"
        src={error ? imageUrls.fallback[fallbackType] : src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...sx,
        }}
      />
    </Box>
  );
};

export default ImageWithFallback;
