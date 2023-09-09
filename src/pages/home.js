import React from 'react'
import Jumbotron from '../features/home/jumbotron';
import Header from '../base_layouts/header';
import About from '../features/home/about';
import Footer from '../base_layouts/footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Jumbotron />
            <About />
            <Footer />
        </div>
    );
}
      
      
      

export default Home