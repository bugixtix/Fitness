import React,{useState} from "react";
import {Box} from '@mui/material'
import { Exercises } from "../coms/Exercises";
import { SearchExercises } from "../coms/SearchExercises";
import { HeroBanner } from "../coms/HeroBanner";
export var Home = () =>{
    var [exercises_$, setExercises_$] = useState([])
    var [bodyPart_$, setBodyPart_$] = useState('all')

    return(
        <div>
            <HeroBanner/>
            <SearchExercises 
                setExercises_$={setExercises_$}
                bodyPart_$={bodyPart_$}
                setBodyPart_$={setBodyPart_$}
             />
            <Exercises
            setExercises_$={setExercises_$}
            bodyPart_$={bodyPart_$}
            setBodyPart_$={setBodyPart_$}
            />
        </div>
    )
}