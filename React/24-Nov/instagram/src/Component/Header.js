import React, { Component } from "react";
import "./_Header.scss";
import "react-icons/fi";
import "react-icons/ri";
import "react-icons/im";
import "react-icons/bs";
import { FiSend, FiHome, HiHome } from "react-icons/hi";
import Logo from "../Instagram Project/Image/Logo.png";
import PF from "../Instagram Project/Image/PFP_11.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { ImCompass2 } from "react-icons/im";
import { FaRegHeart, FaHeart, FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          {" "}
          <img src={Logo} alt="" width="100sem" className="logo" />{" "}
        </Link>
        <input type="text" placeholder="Search" />
        <div className="Icon">
          <a href="#">
            <HiHome size={25} className="Icon_1" />
          </a>
          <a href="#">
            <RiSendPlaneFill size={25} className="Icon_1" />
          </a>
          <a href="#">
            <ImCompass2 size={25} className="Icon_1" />
          </a>
          <a href="#">
            {/* <FaHeart size={40} className="HeartFill" /> */}

            <BsHeart size={25} className="Icon_1" />
          </a>
          <Link to="/profile">
            <div className="PF_HP">
              <img src={PF} alt="" width="30px" />{" "}
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
