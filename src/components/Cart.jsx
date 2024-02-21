import React from 'react'
import NavBar from './NavBar'

const Cart = () => {
    return (
        <div>

            <NavBar />


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Your Amazon Cart is empty</h5>
                                        <p className="card-text"><a href="index.html">Shop today’s deals</a></p>
                                        <p className="card-text"><button type="button" className="btn btn-warning">Sign in to your account</button>
                                            <button type="button" className="btn btn-outline-secondary">Sign up now</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart