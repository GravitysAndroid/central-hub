import { ShapeSlider } from '@/components/play-pen/ShapeSlider';
import { SkeletonShape } from '@/components/play-pen/Skeleton';
import { Container, Grid2 } from '@mui/material';

export default async function PlayPen() {
  return (
    <Container maxWidth='xl'>
      <Grid2 direction='column' maxWidth='xl' container spacing={2} sx={{ padding: 4 }}>
        <ShapeSlider />
        <SkeletonShape />
      </Grid2>
    </Container>
  );
}
