import React from "react";
import "./BottomNav.scss";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BiRectangle, BiHomeAlt } from "react-icons/bi";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div>
        <BiHomeAlt className="home" />
        <p>Home</p>
      </div>
      <div>
        <FiSearch className="search-icon" />
        <p>Search</p>
      </div>
      <div>
        <div>
          <BiRectangle />
          <BiRectangle />
          <BiRectangle />
          <BiRectangle />
        </div>
        <p>Categories</p>
      </div>
      <div>
        <FiShoppingCart className="cart" />
        <p>Cart</p>
      </div>
      <div>
        <BsPerson className="account" />
        <p>Account</p>
      </div>
    </nav>
  );
}
