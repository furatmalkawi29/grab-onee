import React from "react";
import {Link} from 'react-router-dom'
import "./TopNav.scss";
import logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import nz from "../../assets/nz.png";

export default function TopNav() {
  return (
    <nav className="top-nav">
      <Link to="/">
      <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul>
        <li className="auckland">
          <div>
            <HiOutlineLocationMarker/> Auckland <RiArrowDownSLine />
          </div>
        </li>
        <li>
          <FiHeart />
        </li>
        <li>
          <FiShoppingCart />
        </li>
        <li>
          <div>
            <BsPerson />
            <RiArrowDownSLine />
          </div>
        </li>
        <li>
          <div className="subscribe">
            <HiOutlineMail />
            Subscribe
          </div>
        </li>
        <li className="nz">
          <img src={nz} alt="nz" />
        </li>
      </ul>
    </nav>
  );
}
