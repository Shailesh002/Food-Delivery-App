import './css/navbar.css';
import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import Modal from "../Modal"
import Cart from "../screens/Cart" 
import { useCart } from '../components/ContextReducer';



export default function Navbar() {
    let data = useCart();

    const [cartView,setCartView]=useState(false);

    const navigate = useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-custom-1">
                <Link className="navbar-brand fs-1 customHead" to="/">Your MealPartner</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" to="/">Home </Link>
                        </li>
                        {(localStorage.getItem("authToken")) ?
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/">My Orders</Link>
                            </li>
                            : ""
                        }


                    </ul>

                    {(!localStorage.getItem("authToken")) ?

                        <div className='d-flex'>
                            <Link className="btn text-white mx-1" to="/login">Login</Link>

                            <Link className="btn text-white mx-1" to="/createuser">SignUp</Link>
                        </div>
                        :
                        <div className='applyFlex'>
                            <div className='btn text-white mx-1' onClick={()=>{setCartView(true)}}>
                                My Cart {" "}
                                <Badge pill bg="danger"> {data.length} </Badge>
                            </div>

                            {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}


                            <div className='btn text-white mx-1' onClick={handleLogout}>
                                Logout
                            </div>
                        </div>

                    }
                </div>
            </nav>
        </div>
    )
}
