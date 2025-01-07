import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

const Home = () => {
    return (
        <>
        <div className="bg-gradient-to-br from-orange-600 via-white to-green-950 via-50% to-80%">
            <Navbar/>
            <Body/>
        <Footer/>
        </div>
        <div>
        
        </div>
        </>
    );
};

export default Home;