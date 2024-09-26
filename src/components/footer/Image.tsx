import { Box, Grid2 } from '@mui/material';
import NextImage from 'next/image';
import { FC } from 'react';

export const FooterLogo: FC = () => {
  return (
    <Grid2
      container
      size={{ xs: 4, md: 3, lg: 2 }}
      sx={{
        width: { xs: '100%', sm: 1 / 3 },
        alignItems: { xs: 'center', sm: 'flex-start' },
        justifyContent: 'center',
      }}
    >
      <Box>
        <NextImage src={''} width={80} height={80} alt='logo' />
      </Box>
    </Grid2>
  );
};
