import React from "react";
import { useNavigate } from "react-router-dom"
import NavbarComponent from "../components/Navbar";
import { AutoCrud } from "@vaadin/hilla-react-crud";
import { StudentsService } from "../generated/endpoints";
import StudentModel from "../generated/com/library/model/StudentModel";


export default function Students(){
    const navigate = useNavigate();
    return(
        <div className="dashboard-bg">
            <NavbarComponent />
            <div className="container text-dark bg-light  mt-5 rounded">
                <AutoCrud 
                    className=" rounded"
                    service={StudentsService}
                    model={StudentModel}
                    formProps={{
                        visibleFields: ['firstName', 'lastName', 'stream', 'session',"gender"]
                    }}
                />
            </div>
        </div>
    )
}