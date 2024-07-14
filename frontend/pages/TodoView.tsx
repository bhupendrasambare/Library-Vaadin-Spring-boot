import { useNavigate } from "react-router-dom"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import React from "react";


export default function TodoView(){
    const navigate = useNavigate();
    return(
        <div className="container shadow-lg p-2">
            <h1 className="text-center">
                TODO List
            </h1>
        </div>
    )
}