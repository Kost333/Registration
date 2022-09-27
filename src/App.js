import React from 'react';
import Register from "./component/register/register";
import Login from "./component/login/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/register'
                           element={<Register/>}/>
                    <Route path='/'
                           element={<Login/>}/>/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;