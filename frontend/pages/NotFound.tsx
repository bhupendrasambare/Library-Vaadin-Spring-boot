import { useNavigate } from "react-router-dom"
import React from "react";

export default function NotFound(){

    const navigate = useNavigate();

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a onClick={()=>navigate("/")} className="text-light btn-wooden cursor-pointer">Go To Homepage</a>
            </div>
        </div>
    )
}