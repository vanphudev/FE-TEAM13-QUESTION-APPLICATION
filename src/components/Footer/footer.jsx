import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/icons/logo-color.png";
import "./style.css";

const FooterComponent = () => {
   return (
      <footer className='footer' style={{backgroundColor: "#292F42"}}>
         <div className='footer-content'>
            <div className='logo-container'>
               <Link to='/'>
                  <img src={logo} alt='logo' />
               </Link>
            </div>
            <div className='teammates'>
               <div>Nguyễn Văn Phú (Leader)</div>
               <div>Phan Danh Minh</div>
               <div>Phan Thị Hoài Diễm</div>
               <div>Đặng Phạm Xuân Lộc</div>
            </div>
         </div>
      </footer>
   );
};

export default FooterComponent;
