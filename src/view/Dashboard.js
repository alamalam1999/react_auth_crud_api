import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ListBook from '../Books/ListBook';


function Dashboard() {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Redirect to login page
        navigate('/login');
    };

    const goToAddBooks = (e) => {
        e.preventDefault();
        navigate('/addbook')
    }

    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Dashboard Buku</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='mt-3'>
                <h1>Welcome to the Dashboard</h1>
                <h4>Daftar Buku</h4>
                <button className='btn btn-primary' onClick={goToAddBooks}>Add Books</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Content</th>
                            <th scope="col">Visuals</th>
                            <th scope="col">Book Cover</th>
                            <th scope="col">Layout Formating</th>
                            <th scope="col">Genres</th>
                            <th scope="col">Physical Attributes</th>
                            <th scope="col">Interactive Element</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <ListBook />
                </table>
            </div>
        </div>

    );
}

export default Dashboard;
