import React from 'react'
import './App.css';
import Video from './components/Video/Video';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing:"ease-in-out"
    });
  },[]);
  return (
      <div className='h-[700px] relative'>
        <Video />
        <Navbar />
        <Hero />
        <Services/>
        <Banner/>
        <Banner2/>
        <Footer/>
      </div>
  );
}

export default App;