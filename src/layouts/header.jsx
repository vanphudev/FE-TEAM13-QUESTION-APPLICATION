import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../assets/icons/logo-white.png';
import logo1 from '../assets/icons/logo-amazing-tech-v2.png';
import { AiOutlineFacebook, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiLogoMessenger, BiPhone } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <div className="header_top_left">
        <ul>
          <li className="logo11">
            <img src={logo1} alt="Logo1" className="logo1" />
            Question Application
          </li>
          <li>
            <AiOutlineMail />
            Amazing Tech@gmail.com
          </li>
          <li>
            Address: 20/2 Street 904, District 9, Ho Chi Minh City
          </li>
        </ul>
      </div>
      <div className="header-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="searchheader">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61560052164888" className="icon">
              <AiOutlineFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/messages/t/325097017352199" className="icon">
              <BiLogoMessenger />
            </a>
          </li>
          <li>
            <a href="tel:123456789" className="icon">
              <BiPhone />
            </a>
          </li>
          
          <li>
            <Link to="/profile" className="icon">
              <AiOutlineUser />
            </Link>
            <div className="login">
              <button className="login-btn">Login</button>
              <button className="logout-btn">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;