'use client';

import { Book, Menu as MenuIcon, Person } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import NextLink from 'next/link';
import { FC, useState } from 'react';

import { paths } from '@/paths';

const pages = [{ title: 'Home', url: paths.home }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavigationBar: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function HideOnScroll({ children }: { children: React.ReactElement }) {
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction='down' in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <HideOnScroll>
      <AppBar sx={{ opacity: 0.9 }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {mdUp && (
              <>
                <Book />
                <Typography
                  variant='h6'
                  noWrap
                  component={NextLink}
                  href={paths.index}
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Hayden
                </Typography>
                <Stack spacing={2} direction='row' sx={{ flexGrow: 1 }}>
                  {pages.map((page) => (
                    <Button key={`${page.title}-desktop`} variant='contained' sx={{ my: 2 }}>
                      {page.title}
                    </Button>
                  ))}
                </Stack>
              </>
            )}
            {!mdUp && (
              <>
                <Box sx={{ flexGrow: 1 }}>
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenDrawer}
                    color='inherit'
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Drawer
                  open={openDrawer}
                  onClose={handleCloseDrawer}
                  PaperProps={{ sx: { width: { xs: '100%', md: '50%' } }, alignItems: 'center' }}
                >
                  {pages.map((page) => (
                    <MenuItem key={`${page.title}-mobile`} onClick={handleCloseDrawer}>
                      <Typography variant='h4' sx={{ textAlign: 'center' }}>
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Drawer>
                <Book sx={{ mr: 1 }} />
                <Typography
                  variant='h5'
                  noWrap
                  component={NextLink}
                  href={paths.index}
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Hayden
                </Typography>
              </>
            )}
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='User name'>
                  <Person />
                </Avatar>
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
