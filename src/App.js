import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Interests from './Components/Interests'
import Projects from './Components/Projects'
import './App.scss';

function App() {
  return (
    <>
          <Routes>
        <Route path="/" element = { <Layout />} >
            <Route index element={< Home/>} />
            <Route path='About' element={< About/>} />
            <Route path='Contact' element={< Contact/>} />
            <Route path='Interests' element={< Interests/>} />
            <Route path='Projects' element={< Projects/>} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
