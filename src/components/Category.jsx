import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div>

            <div className="container">

                        <div className="row g-3 ">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mobiles</h5>
                                        <img src="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg" className="card-img-top" alt="..." />
                                            <Link to="/mobiles" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">Men's Clothing</h5>
                                        <img src="https://m.media-amazon.com/images/I/71yZcPQ1rFL._SX679_.jpg" className="card-img-top" alt="..." />
                                            <Link to="#" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">Luggage</h5>
                                        <img src="https://m.media-amazon.com/images/I/71DlZJxPIbL._SX679_.jpg" className="card-img-top" alt="..." />

                                            <Link to="#" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">Chairs</h5>
                                        <img src="https://m.media-amazon.com/images/I/81BNLNp0wKL._SX569_.jpg" className="card-img-top" alt="..." />
                                            <Link to="#" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">Laptops</h5>
                                        <img src="https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg" className="card-img-top" alt="..." />
                                            <Link to="#" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">Kitchen</h5>
                                        <img src="https://m.media-amazon.com/images/I/717wEjURHcL._SX569_.jpg" className="card-img-top" alt="..." />
                                            <Link to="#" className="btn btn-primary">View All</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
    )
}

export default Category