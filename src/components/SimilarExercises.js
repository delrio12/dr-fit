import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ( { targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, ml: '20px' }}  mb={5} >
        Exercises that target the same muscle group:  </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>

        <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} mb={5}>
        Exercises that use the same equipment: </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises