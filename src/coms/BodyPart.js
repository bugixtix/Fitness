import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

export function BodyPart({item, setBodyPart_$, bodyPart_$}) {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop:bodyPart_$===item?'4px soid #ff2625':'',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px',
        }}
    >
        <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}} 
        />
    </Stack>
  )
}
