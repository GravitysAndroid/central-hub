import { Grid2 } from '@mui/material';

import { primary } from '@/theme/colors';

export const PlayPenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid2
      container
      spacing={3}
      direction='column'
      sx={{ border: `1px solid ${primary.light}`, borderRadius: 2, padding: 2 }}
    >
      {children}
    </Grid2>
  );
};
