import React, { useEffect, useState } from "react";
import "../style/dashboard.css";
import NavbarComponent from "../components/Navbar";
import { BookService } from "../generated/endpoints";
import Books from "../generated/com/library/model/Books.js";
import { FaEdit } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal.js";

export default function Dashboard() {
  const [books, setBooks] = useState<Books[]>([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setBooks(await BookService.findAll());
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [modalShow]);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <div className="dashboard-bg">
      <NavbarComponent />
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container bg-dark bg-gradient p-4 text-light bg-opacity-25 mt-5 rounded">
        <div className="d-flex justify-content-between">
          <div className="p-3 fs-4 align-middle">
            <h4>Dashboard</h4>
          </div>
          <div className="p-2 fs-4">
            <button className="btn btn-success" onClick={() => setModalShow(true)}>
              <IoMdAddCircleOutline className="me-2" /> New Book
            </button>
          </div>
        </div>
        <div className="table-container my-3 rounded-3">
          <table className="table table-striped table-dark table-hover rounded table-borderless">
            <thead>
              <tr>
                <th scope="col" className="fit">ID</th>
                <th scope="col">Book Name</th>
                <th scope="col">Author Name</th>
                <th scope="col" className="fit">Year</th>
                <th scope="col" className="fit">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBooks.map((book, index) => (
                <tr key={index}>
                  <td className="fit">{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td className="fit">{book.year}</td>
                  <td className="fit">
                    <div className="d-flex">
                      <button
                        className="btn btn-sm btn-success me-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Issue"
                      >
                        <CiBookmarkCheck className="me-1" /> Issue
                      </button>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <FaEdit className="me-1" /> Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav>
          <ul className="pagination justify-content-start">
            {[...Array(totalPages).keys()].map((page) => (
              <li key={page + 1} className={`rounded page-item ${currentPage === page + 1 ? 'active bg-dark text-light' : ' text-dark bg-light'}`}>
                <a onClick={() => paginate(page + 1)} className="page-link text-dark cursor-pointer">
                  {page + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
