import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './pages/Home';
import Causes from './pages/Causes';
import Sponser from './pages/Sponser';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  return (
    <>
    <Header/>
   
   <Sponser/>
    <Footer/>
    </>
  )
}

export default App