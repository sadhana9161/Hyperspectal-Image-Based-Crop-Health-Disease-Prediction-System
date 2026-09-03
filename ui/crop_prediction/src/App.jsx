import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import NewPrediction from './pages/NewPrediction';
import History from './pages/History';

const App = () => {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/prediction' element={<NewPrediction />}/>
    <Route path='/history' element={<History />}/>
  </Routes>
  </BrowserRouter>
  </>)
}

export default App;
