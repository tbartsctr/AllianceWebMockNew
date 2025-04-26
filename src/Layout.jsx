import React from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';
import MagniImage from "./MagniImg.png";


function Layout ({ children }) {
    return (
        
        <div> 
            {/*headerBar*/}
            <div className="navBar">
              <Link to="/home">
                  <img
                className="aimLogo"
                src="https://aimforwellbeing.org/cdn/shop/files/aim-logo_2x_a4312550-3b4d-4928-a92c-ad712cf3c07c.png?v=1736934566"
                alt="Logo"
          /></Link>
        <form action="/search" method="get">
          <div className="searchDiv">
            <input
              type="search"
              id="searchBar"
              placeholder="Search Products"
              required
            />
            <img
              id="magniSymbol"
              src={MagniImage}
              alt="Search Icon"
            />
            <img
              id="accountLogo"
              src="https://t4.ftcdn.net/jpg/03/42/99/71/360_F_342997143_wz7x1yR7KWhmhSKF9OHwuQ2W4W7IUDvH.jpg"
              alt="Account"
            />
            <h3>My Account</h3>
          </div>
            </form>
        </div>
        

        {/*MenuBar*/}
    
        <div className="menuBar">
              <ul>
          <li>
            <Link to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/become-patient">Become a Patient</Link></li>
          <li>
            <Link to="/create-account">
              Login
            </Link></li>
            
          <li>Resources</li>
          <li> 
            <Link to="/shop">
              Shop
            </Link></li>
        </ul>
      </div>
            <main>{children}</main>
        </div>
        
    );
}

export default Layout;
