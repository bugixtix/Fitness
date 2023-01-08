import React, { useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import { HorizontalScrollbar } from './HorizontalScrollbar'

export const SearchExercises = ({bodyPart_$,setBodyPart_$,setExercises_$}) => {

    var [search_$, setSearch_$] = useState('')
    var [bodyParts_$, setBodyParts_$] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

            setBodyParts_$(['all',...bodyPartsData])
        }
        fetchExercisesData()
    },[])
    useEffect(()=>{console.log(bodyParts_$)},[bodyParts_$])

    const handleSearch = async () => {
    if(search_$){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)

        const searchedExercises =  exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search_$) || exercise.target.toLowerCase().includes(search_$) || exercise.equipment.toLowerCase().includes(search_$) || exercise.bodyPart.toLowerCase().includes(search_$) 
        );
        setSearch_$('')
        setExercises_$(searchedExercises)
    }
}


return (

    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight='700' sx={{
            fontSize:{lg:'44px', xs:'30px'}}}
            mb='50px' textAlign={'center'}>
            Awesome Exercises You <br/>
            Should Know
        </Typography>

        <Box position='relative' mb='72px' >
            <TextField
            sx={{
                input:{
                fontWeight:'700',
                border:'none', 
                borderRadius:'4px',
                borderRight:'none',
            },
                width:{lg:'800px', xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:'40px',
                borderRight:'none',
            }}
            height='76px'
            value={search_$}
            onChange={(e)=>{setSearch_$(e.target.value.toLowerCase())}}
            placeholder='Search Exercises'
            type='text'
            />

        <Button className='search-btn'
                sx={{
                    bgcolor:'#ff2625',
                    color:'#fff',
                    textTransform:'none',
                    width:{lg:'120px',xs:'80px'},
                    fontSize:{lg:'20px',xs:'14px'},
                    height:'62px',
                    position:'absolute',
                    right:'0px'
                }}
                onClick={handleSearch}
                >
            Search
        </Button>
        </Box>

        <Box sx={{
            position:'relative',width:'100%',p:'20px',
        }}>
            <HorizontalScrollbar data={bodyParts_$} bodyPart_$={bodyPart_$} setBodyPart_$={setBodyPart_$}/>

        </Box>

    </Stack>

    )
}
