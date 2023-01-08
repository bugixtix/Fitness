import React from 'react'
import {Box} from '@mui/material'
import {BodyPart} from './BodyPart.js'
import {ScrollMenu, VisibilitContext} from 'react-horizontal-scrolling-menu'

export const HorizontalScrollbar = ({data, bodyPart_$, setBodyPart_$}) => {
  return (
    <ScrollMenu>
        {data.map((item)=>
        <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m='0 40px'
        >
            <BodyPart item={item} bodyPart_$={bodyPart_$} setBodyPart_$={setBodyPart_$}/>
        </Box>
        )}
    </ScrollMenu>
  )
}
