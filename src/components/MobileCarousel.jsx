import React from 'react'
import NavBar from './NavBar'

const MobileCarousel = () => {
  return (
    <div>
       <NavBar/>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://m.media-amazon.com/images/G/31/JanartiQOO/janartIQOO/iQOOstreaks/iQOOCLP/5Gstore/BAUGW/D112032990_WLD---BAU---iQOO-Neo-9-pro---Design-SIM_Homepage_1400x800._CB584659048_.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/Redmi125G/GW/D114346362_INWLD_BAU_Redmi12_5G_catpage_1400x800._CB584633802_.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12/20Jan/D108792004_WLD_OnePlus_Waffle_NewLaunch_1400x800._CB584582692_.jpg" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>


    </div>
  )
}

export default MobileCarousel