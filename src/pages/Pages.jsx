import React from 'react';
import Home from "./Home";
import TeamGames from "./TeamGames";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path="/TeamGames/:id" element={<TeamGames/>}/>
        </Routes>
    </div>
  )
}

export default Pages