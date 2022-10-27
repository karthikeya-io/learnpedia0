import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Courses from './components/Courses';
import CoursePage from './components/CoursePage';
import Signupform from './components/Signupform';
import Loginform from './components/Loginform';
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      
      <Route path='/' element={<App/>} >
      <Route index element={<Home/>}></Route>
        <Route path='courses'  >
          <Route index element={<Courses/>}/>
          <Route path=':courseid' element={<CoursePage/>}></Route>
        </Route>
        <Route path='signup' element={<Signupform/>}></Route>
        <Route path='login' element={<Loginform/>}></Route>
      </Route>
      
      
    </Routes>
  </Router>
);


