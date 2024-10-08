import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import  ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [exercisesPerPage] = useState(9);


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth'});
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`, exerciseOptions);
      }
      setExercises(exercisesData);
      setCurrentPage(1);
    }

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises'
      sx={{mt: { lg: '109px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h4' fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='46px'>
        Showing Results
      </Typography> 
      <Stack direction='row' sx={{ gap: { lg:'108px', xs: '50px'}}}
       flexWrap='wrap' justifyContent='center'>
         {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
            {exercises.length > 9 && (
                <Pagination
                    color = 'standard'
                    shape = 'circular'
                    defaultPage = { 1 }
                    count = { Math.ceil(exercises.length / exercisesPerPage) }
                    page = { currentPage }
                    onChange = { handlePageChange }
                    size = 'large' />  
            )}
        </Stack>
    </Box>
  );
};

export default Exercises;

