import React from "react";
import "../BannerComponent/banner.css";
import Logo from "../../assets/deliverylogored.png"
import { Link, useNavigate } from "react-router-dom";

export default function BannerComponent() {
  return (
    <div style={{paddingTop:"60px"}}>
      <div className="container firstbannermein">
        <div className="bannerp-1">
          <div className="banner-tx-1">
          <h1 className="Bannertext-1">From Order To</h1>
          <h1 className="Bannertext-1">Doorstep In</h1>
          <h1 className="Bannertext-1">Minutes</h1>
          <h6 className="BannerH6TExt">Fastest food delivery takes customers satisfaction to</h6>
            <h6 className="BannerH6TExt2" >new heights with lighting-quick deliveries</h6>
          <button className='designbtncdp Designuu'  ><Link className="nav-link"  to="/Foods">
            View More Foods
              </Link></button>
          </div>
        </div>
        <div className="bannerp-2">
          <div className="cirlce"></div>
          <img className="DeliBanImg" src={Logo} alt="" />
        </div>
      </div>
      </div>
      );
}
