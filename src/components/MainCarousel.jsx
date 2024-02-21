import React from 'react'
import PropTypes from 'prop-types'

const MainCarousel = props => {
    return (
        <div>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Jan/One/Unrec-PC-1500._CB585478602_.jpg"
                            className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/Bau/Unrec/Citi/Shoes/Frame_386_3000pc._CB584585056_.jpg"
                            className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
                            className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

MainCarousel.propTypes = {}

export default MainCarousel