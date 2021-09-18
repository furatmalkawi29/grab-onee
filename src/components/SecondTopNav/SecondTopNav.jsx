import React, {useState} from 'react'
import './SecondTopNav.scss'
import {IoIosArrowDown} from 'react-icons/io'
import { FiSearch } from "react-icons/fi";
import {CgClose} from 'react-icons/cg'
import { If } from "react-if";

export default function SecondTopNav() {
  const [hidden, setHidden] = useState('');

  function showIcon(event){
    setHidden(event.target.value)
  }
  
  function hideIcon (){
    setHidden('')
  }

  return (
    <nav className="second-top-nav">
      <ul>
        <li><div>Browse Categories <IoIosArrowDown fill="#01B2EE"/></div></li>
        <li>What's New</li>
        <li>Trending</li>
        <li>For You</li>
        <li>Shop Products</li>
      </ul>
      <form>
        <FiSearch/>
        <input onChange={showIcon} type="text" placeholder="Search GrabOne" value={hidden}/>
        <If condition={hidden.length}>
        <CgClose className="close-icon" onClick={hideIcon}/>
        </If>
      </form>
    </nav>
  )
}
