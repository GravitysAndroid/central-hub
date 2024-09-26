import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Metadata } from 'next';

import { Footer } from '@/components/footer/Footer';
import { NavigationBar } from '@/components/header/NavigationBar';
import { createTheme } from '@/theme/theme';
import './globals.css';

export const metadata: Metadata = {
  title: `Hayden's Hub`,
  description: 'Centralized hub for all things Hayden',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider theme={createTheme}>
          <CssBaseline />
          <Box sx={{ backgroundColor: 'primary.main', marginBottom: 8 }}>
            <NavigationBar />
          </Box>
          <Box sx={{ flex: 1 }}>{children}</Box>
          <Box sx={{ backgroundColor: 'primary.main' }}>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
