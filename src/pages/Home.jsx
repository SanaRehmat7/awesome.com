import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopHeader from '../components/Headers/TopHeader';
import BottomHeader from '../components/Headers/BottomHeader';
import Main from '../components/HeroSection/main';
import Footer from '../components/Footer';
const Home = () => {
    return ( 
    <div className="w-full h-screen bg-gray-900">
      <TopHeader />
      <BottomHeader/>
      <Main />
      <Footer/>

    </div>
     );
}
 
export default Home;