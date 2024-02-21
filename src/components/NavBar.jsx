import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/">
                            <img height="50px" width="100px"
                                src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
                                alt=".." />
                        </Link>
                    </li>
                    <Link className="navbar-brand" to="#">Update location</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search Amazon.in"
                                    aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                            </form>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Return & Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/cart">
                                    <img height="50px" width="100px"
                                        src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
                                        alt="" />
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">All</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Fresh</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Amazon miniTV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Sell</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Best Sellers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Today's Deal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mobiles">Moblie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Electronics</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Prime
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Customer Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Gift Ideas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">New Launches from Mobiles & more | Shop now</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar