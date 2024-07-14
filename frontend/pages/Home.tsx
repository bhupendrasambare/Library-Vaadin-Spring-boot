import "../style/home.css"
import NavbarComponent from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import React from "react";

export default function Home(){

    const navigate = useNavigate();

    return (
        <div className="home-bg">
            <NavbarComponent/>
            <div className="d-flex justify-content-center align-items-center div-center-height">
                <div className="p-5 text-light">
                    <div className="text-center fs-1 my-1">Welcome to Your Library Management System</div>
                    <div className="text-center fs-5 mb-4">
                        Streamline your library operations with our advanced management system.
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-wooden rounded-pill align-items-cetner text-light fs-5" onClick={()=>navigate('/dashboard')}>Dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}