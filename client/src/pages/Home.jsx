import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import ImageSlider from "./imageslider";

const Home = () => {
    return (
        <>
        <div className="bg-gradient-to-br from-orange-600 via-white to-green-950 via-50% to-80%">
            <Navbar/>
            <div className="flex justify-center w-4/4 h-3/4 "> 
            <ImageSlider/>
            </div>
            
            <Body/>
        <Footer/>
        </div>
        
        </>
    );
};

export default Home;