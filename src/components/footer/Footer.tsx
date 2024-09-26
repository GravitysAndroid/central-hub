import { Container, Grid2 } from '@mui/material';
import { FC } from 'react';

import { primary } from '@/theme/colors';
import { FooterLogo } from './Image';
import { FooterLinks } from './Links';

export const Footer: FC = () => {
  return (
    <Container maxWidth='xl'>
      <Grid2 container direction={{ xs: 'column', sm: 'row' }} sx={{ background: primary.main, padding: 2 }}>
        <FooterLogo />
        <FooterLinks />
      </Grid2>
    </Container>
  );
};
