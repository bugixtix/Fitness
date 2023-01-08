import React from "react";

import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Box } from "@mui/material";
import { Home } from "./pages/Home";
import { ExcerciseDetail } from "./pages/ExcerciseDetail";
import { Navbar } from "./coms/Navbar";
import { Footer } from "./coms/Footer";
export const App = () => {

    return(
        <Box width='400px' sx={{width:{x1:'1488px'}}} m={'auto'}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExcerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    )
}