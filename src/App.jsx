import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Layout from './components/Layout';



function App() {

  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" index element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
