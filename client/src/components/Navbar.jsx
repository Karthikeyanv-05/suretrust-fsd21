import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from "@react-oauth/google";
import authenticate from "./Auth";

const Navbar = () => {
    const [isMainOpen, setMainOpen] = useState(false);
    const [isSubOpen, setSubOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleOptionClick = (option) => {
        switch (option) {
            case "defence":
                navigate("/defence");
                break;
            case "tnpsc":
                navigate("/tnpsc");
                break;
            case "upsc":
                navigate("/upsc");
                break;
            case "ssc":
                navigate("/ssc");
                break;
            case "rrb":
                navigate("/rrb");
                break;
            case "suretrust":
               <a href="https://www.suretrustforruralyouth.com/"/>;
                break;
            case "tnsdc":
                navigate("/tnsdc");
                break;
            case "pmkvy":
                navigate("/pmkvy");
                break;
            default:
                navigate("/"); // Navigate to home if no valid option is selected
        }
    };

    return (
        <nav>
        <div className=" w-full bg-gradient-to-l from-green-950 via-green-400 to-teal-700 text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-slate-50 to-green-950 text-3xl font-bold cursor-pointer">
               <Link to={"/"} >TamilVazhi </Link> 
            </h1>

            {/* Navbar */}
            <ul className="flex font-bold space-x-24 lg:text-xl">
                {/* Home */}
                <li className="hover:text-black transition duration-300">
                    <Link to="/">Home</Link>
                </li>

                {/* Education Dropdown */}
                <li className="relative group">
                    <button 
                        onMouseOver={() => setMainOpen(!isMainOpen)} 
                        className="hover:text-black flex items-center space-x-2"
                    >
                        <span>Education</span>
                        <svg 
                            className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:rotate-180"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Main Dropdown Menu */}
                    {isMainOpen && (
                        <div className="absolute left-0 mt-3 w-56 bg-green-900 shadow-lg rounded-lg p-2 space-y-2">
                            <ul className="space-y-2">
                                <li onClick={() => handleOptionClick("suretrust")} className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md"><a href="https://www.suretrustforruralyouth.com/">SureTrust</a></li>
                                <li 
                                    onMouseOver={() => setSubOpen(!isSubOpen)} 
                                    className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md flex justify-between items-center"
                                >
                                    TNSDC/PMKVY
                                    <svg 
                                        className={`h-4 w-4 transition-transform duration-300 ${isSubOpen ? 'transform rotate-90' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </li>

                                {/* Submenu */}
                                {isSubOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        <ul className="space-y-2">
                                            <li onClick={()=>{handleOptionClick("tnsdc")}} className="p-2  bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">TNSDC</li>
                                            <li onClick={() => handleOptionClick("pmkvy")} className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">PMKVY</li>
                                        </ul>
                                    </div>
                                )}
                            </ul>
                        </div>
                    )}
                </li>

                {/* Careers Dropdown */}
                <li className="relative group">
                    <button 
                        onMouseOver={() => setDropdownOpen(!isDropdownOpen)} 
                        className="hover:text-black flex items-center space-x-2"
                    >
                        <span>Careers</span>
                        <svg 
                            className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:rotate-180"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Careers Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-3 w-56  bg-green-950 shadow-lg rounded-lg p-2 space-y-2">
                            <ul className=" space-y-2 bg-green-950">
                                <li onClick={()=> handleOptionClick("defence")} className="p-2  bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">DEFENCE</li>
                                <li onClick={() => handleOptionClick("tnpsc")} className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">TNPSC</li>
                                <li onClick={() => handleOptionClick("upsc")} className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">UPSC</li>
                                <li onClick={() => handleOptionClick("ssc")} className="p-2 bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">SSC</li>
                                <li onClick={() => handleOptionClick("rrb")} className="p-2  bg-green-800 hover:bg-green-950 cursor-pointer rounded-md">RRB</li>
                            </ul>
                        </div>
                    )}
                </li>

                {/* About Us Link */}
                <li className="hover:text-black transition duration-300">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>

            {/* Login Button */}
            <div className="relative">
                <button className="bg-gradient-to-r from-orange-600 via-white to-green-950 text-blue-950 px-4 py-2 rounded-full hover:scale-110 hover:text-green-950" ><Link to='/login'>Login</Link>
                </button>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;