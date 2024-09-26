import { Skeleton } from '@mui/material';

import { PlayPenWrapper } from '../wrappers/PlayPenWrapper';

export const SkeletonShape = () => {
  return (
    <PlayPenWrapper>
      <Skeleton variant='rectangular' />
      <Skeleton variant='circular' />
      <Skeleton variant='rounded' />
      <Skeleton variant='text' />
    </PlayPenWrapper>
  );
};
