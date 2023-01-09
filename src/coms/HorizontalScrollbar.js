import React, { useContext } from 'react'
import {Box, Button, Typography} from '@mui/material'
import {BodyPart} from './BodyPart.js'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const RightArrow = () =>{
  const {isLastItemVisible,scrollNext} = useContext(VisibilityContext)
  return(
    <Typography onClick={()=>scrollNext()} className='right-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  )
}
const LeftArrow = () => {
  const { isFirstItemVisible,scrollPrev } = useContext(VisibilityContext);
  
  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

export const HorizontalScrollbar = ({data, bodyPart_$, setBodyPart_$}) => {
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
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
