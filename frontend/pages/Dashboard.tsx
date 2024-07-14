import React, { useState } from "react";
import "../style/dashboard.css"
import NavbarComponent from "../components/Navbar";

export default function Dashboard(){

    const[books,setBooks] = useState();

    return (
        <div className="dashboard-bg">
            <NavbarComponent/>
            <div className="container bg-dark bg-gradient p-4 text-light bg-opacity-25 mt-5" >
                <h4>Dashboard</h4>

            </div>
        </div>
    )
}