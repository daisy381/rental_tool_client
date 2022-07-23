//libraries
import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//components
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
