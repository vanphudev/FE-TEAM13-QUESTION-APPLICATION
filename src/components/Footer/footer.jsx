import React from "react";
import logo from '../../assets/icons/logo-color.png';
import './style.css';
import { red } from "@mui/material/colors";

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#007F5F' }}>
            <div className="footer-content">
                <div className="logo-container">
                    <a href="https://amazingtech.vn/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo"
                        />
                    </a>
                </div>

                <div className="teammates">
                    <div>Nguyễn Văn Phú (Leader)</div>
                    <div>Phan Danh Minh</div>
                    <div>Phan Thị Hoài Diễm</div>
                    <div>Đặng Phạm Xuân Lộc</div>
                </div>

                <div className="button-container">
                    <button className="button-18 button-fixed">
                        Theme
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

