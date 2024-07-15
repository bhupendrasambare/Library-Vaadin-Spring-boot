import React, { useEffect, useState } from "react";
import "../style/dashboard.css"
import NavbarComponent from "../components/Navbar";
import {BookService} from "../generated/endpoints"
import Books from "../generated/com/library/model/Books.js";
import { FaEdit } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";


export default function Dashboard(){

    const[books,setBooks] = useState<Books[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            setBooks(await BookService.findAll());
            // console.log(await )
          } catch (error) {
            console.error("Error fetching books:", error);
          }
        };
    
        fetchBooks();
      }, []);

    return (
        <div className="dashboard-bg">
            <NavbarComponent/>
            <div className="container bg-dark bg-gradient p-4 text-light bg-opacity-25 mt-5" >
                <h4>Dashboard</h4>
                <table className="table table-striped table-dark table-hover">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Year</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => (
                            <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>
                                    <button className="btn btn-sm btn-success">
                                        <CiBookmarkCheck className="me-2"/>ISSUE
                                    </button>
                                    <button className="btn btn-sm btn-success mx-2">
                                    <FaEdit className="me-2"/> Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}