'use client';

import { Hexagon, Pentagon, Rectangle, RotateLeft, RotateRight } from '@mui/icons-material';
import { Box, Button, Grid2, Icon, Slider, Stack } from '@mui/material';
import { useState } from 'react';
import { PlayPenWrapper } from '../wrappers/PlayPenWrapper';

export const ShapeSlider = () => {
  const [value, setValue] = useState<number>(180);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleLeft = () => {
    setValue(value! > 0 ? value - 10 : 0);
  };

  const handleRight = () => {
    setValue(value! < 360 ? value + 10 : 360);
  };

  return (
    <PlayPenWrapper>
      <Grid2 sx={{ padding: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' justifyContent='space-between'>
          <Box
            component={Rectangle}
            sx={{
              width: { xs: '100px' },
              height: { xs: '100px' },
              fill: 'pink',
              rotate: `${value}deg`,
            }}
          />
          <Box
            component={Hexagon}
            sx={{
              width: { xs: '100px' },
              height: { xs: '100px' },
              fill: 'lightblue',
              rotate: `${value}deg`,
            }}
          />
          <Box
            component={Pentagon}
            sx={{
              width: { xs: '100px' },
              height: { xs: '100px' },
              fill: 'lightgreen',
              rotate: `${value}deg`,
            }}
          />
        </Stack>
      </Grid2>
      <Grid2>
        <Stack spacing={2} direction='row' sx={{ alignItems: 'center', marginBottom: 1 }}>
          <Button onClick={handleLeft} sx={{ minWidth: '32px' }}>
            <Icon component={RotateLeft} />
          </Button>
          <Slider
            aria-label='Rotation'
            value={value}
            onChange={handleChange}
            min={0}
            max={360}
            valueLabelDisplay='auto'
            sx={{ width: '100%' }}
          />
          <Button onClick={handleRight} sx={{ minWidth: '32px' }}>
            <Icon component={RotateRight} />
          </Button>
        </Stack>
      </Grid2>
    </PlayPenWrapper>
  );
};
