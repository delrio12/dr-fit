import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

//setting state
const ExerciseDetail = () => {
  const [ ExerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  //calling and fetching data from APIs 'ExerciseDB' and 'youtube search and download' from Rapid API
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }
  }, [id])

  return (
    <Box>
      <Detail ExerciseDetail={ExerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail