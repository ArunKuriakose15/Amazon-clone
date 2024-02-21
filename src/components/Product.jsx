import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Blue</h5>
                                        <p className="card-text">
                                            <h3><b>₹63,999</b></h3>
                                            <br></br>
                                        </p>
                                        <p className="card-text">
                                            <b>Colours</b>
                                            <br></br>
                                            <img height="25px" width="25px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsZFRktLS0tKy0tKzctKy0rKy0rKystKystNzc3LS0tKystLS0tNzctLSstLS03LTc3LS03N//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAGBABAQEBAQAAAAAAAAAAAAAAAAECEYH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAGhEBAQEBAAMAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8A/AyNyEjUjxX1DOVkbkJGpE2unOSRqQkakT1tMpxeKEuQ4AFcBQBAAAAgIoAgKCZRqoE2JxGkMuM1LG6lCLHPjNjozYcZ6jnYljdiVUrK5c652OtjNipWGsuNjnqO9jlY0lcnky5cGqKYcfQkakJGpGFe5nLWY1IkjcRXRmEUUmsiKAMAAAAAABBQggqAFAIkFSmVQVAXEStIE2MpWqlNFjFiN1k2djnYzW6zYqMNRzrnY7VysXHNuOXB05BfWHo90akJGowe1mLGkipbyCgFAAAAAAAAAAAQAABAICKAkRpDKxBUCUSqlCazUrVQ2dYsZrbNVGWo51z1HWsVcc245cFtFMH0I1EjTF7WYsVFJpAAGAUAAAAAAAgAAAIQAAAAEgAIRUBUZaQ01mo0lNFYrNbrNOMtMVjTemNLjn25gKc/H0I1EVhXtZVUUlgBgAIABgAAAAAEIwAAABAACKICEVAlKioE0RUqk1ms1pmmy0zpz06ac6uOfbHolFOd9GLGY0wr2cqqKSwAGAAgEBqACAAEAAAAAAAAICKhkIqAqVlqoaKjNaqGmpWatSnGemKxW9MVcc+mAopg90WIsYPWjQCWiiKZggAqACACMAMAAIAIAAAAAIFBURUMhKATWUaRTOpWarNOI0xWK3pirjm2xqgKYfXvWMtRhXrZaEipawABgKCQAAABgAAACAAAABFEAVABVAKaaiKhpqIqU0VKzVrNNlqs1jTVY0uObdZAUye1c1lqMa9ONRpmKlvFAIwAAABgAAACAAAAAAAEVAQioZCKgTRmqlNFRFQ0WpWK1WKqMtVmsaa1XO1ccu6loxaq+Of2e/rUrnK1Kwr1811isRuIrfNUQJagAAAMABAAAAAAAIqAIABCCGVEoGm1KlENnaM2razTRalZq1mqjDVZ056rdc9tI5fJWLRkXxzde+VqVz61KwsetnTrK3K5ZrcqLHRnTpBmVUtZVVFJUAAYAAAAAAAioCAQEqAZCUSmm0qdQpotOslSmztS1mqyqMrTrFq2sWqkY60lrnqt2uWlxy+TTNonRbm69nWs0GNenmukrWaoiunFalWUE1vKsrXQS0lOihKAABFAEAAEAyoACTogabRkDRUtToGzt+s2paCoz1WbWbQOMdVm1i1BcYbrOq56qC45d1igLYP/2Q==" alt="..." className="rounded-circle" />
                                            <img height="25px" width="25px" src="data:image/jpeg;base64,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" alt="..." className="rounded-circle" />
                                            <img height="25px" width="25px" src="https://5.imimg.com/data5/SELLER/Default/2023/5/308385701/HO/BH/SQ/4122788/olive-green-direct-dyes-500x500.jpg" alt="..." className="rounded-circle" />
                                            <img height="25px" width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEUHFjDa18308+/p6usAABDp5+H+/v8AAAAm+4ekAAABH0lEQVR4nO3PCQ2EABAAMX78Oz4IORGzaR10Wadb1nOb7HyG27XPdW3vcL+Pqe79Gx7LVIdhnmGfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYd9/eB9T3d/w2ue63uG5TXY+w+l+h1EihcbqknUAAAAASUVORK5CYII=" alt="..." className="rounded-circle" />
                                            <img height="25px" width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX62t2cnEggAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==" alt="..." className="rounded-circle" />
                                        </p>
                                        <p className="card-text">
                                            <b>Size</b>
                                            <br></br>
                                            <button type="button" className="btn btn-light">128 GB</button>
                                            <button type="button" className="btn btn-light">256 GB</button>
                                            <button type="button" className="btn btn-light">512 GB</button>
                                        </p>
                                        <p className="card-text">
                                            <b>Brand</b> Apple <br></br>
                                            <b>Model Name</b> iPhone<br></br>
                                            <b>Network Service Provider</b> Unlocked for All Carriers<br></br>
                                            <b>Operating System</b>iOS 14<br></br>
                                            <b>Cellular Technology</b>5G<br></br>
                                        </p>

                                        <b>About this item</b>

                                        <ul>
                                            <li>15 cm (6.1-inch) Super Retina XDR display</li>
                                            <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
                                            <li> Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li>
                                            <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
                                            <li>A15 Bionic chip for lightning-fast performance</li>
                                        </ul>
                                    </div>
                                    <Link to="/cart"><button type="button" className="btn btn-warning">Add to Cart</button></Link>
                                    <button type="button" className="btn btn-warning">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_01._CB640700609_.jpg" className="d-block w-100" alt="..." />


                    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_02._CB640700609_.jpg" className="d-block w-100" alt="..." />


                    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_03._CB640700609_.jpg" className="d-block w-100" alt="..." />


                </div>

            </div>


        </div>
    )
}

export default Product