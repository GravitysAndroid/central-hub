import { Grid2, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';

import { orange } from '@/theme/colors';

export const FooterLinks: FC = () => {
  const links = {
    title1: [
      { title: 'Home', href: '/home' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
    title2: [
      { title: 'Products', href: '/products' },
      { title: 'Services', href: '/services' },
      { title: 'FAQ', href: '/faq' },
    ],
    title3: [
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Support', href: '/support' },
    ],
  };
  return (
    <Grid2
      container
      size={{ xs: 8, md: 9, lg: 10 }}
      direction={{ xs: 'column', sm: 'row' }}
      rowSpacing={{ xs: 1, sm: 0 }}
      sx={{ width: { xs: '100%', sm: 2 / 3 } }}
    >
      {Object.values(links).map((linkGroup, index) => (
        <Stack
          key={linkGroup[index].title}
          spacing={{ xs: 1, md: 0 }}
          direction='column'
          sx={{
            width: { xs: '100%', sm: 1 / 3 },
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              marginBottom: 1,
              color: 'secondary.main',
              textDecorationLine: 'underline',
              textDecorationColor: orange.main,
            }}
          >
            {linkGroup[index].title}
          </Typography>
          {linkGroup.map((link) => (
            <Link key={link.href} component={NextLink} href={link.href}>
              <Typography sx={{ color: 'secondary.main' }}>{link.title}</Typography>
            </Link>
          ))}
        </Stack>
      ))}
    </Grid2>
  );
};
