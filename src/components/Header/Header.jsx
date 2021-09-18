import React from 'react'
import SecondTopNav from '../SecondTopNav/SecondTopNav'
import TopNav from '../TopNav/TopNav'
import './Header.scss'
import spring from '../../assets/spring-collection.png'
import smallSpring from '../../assets/small-spring-collection.png'
import BottomNav from '../BottomNav/BottomNav'

export default function Header() {
  return (
    <header>
      <TopNav/>
      <SecondTopNav/>
      <BottomNav/>
      <div className="header-image-block">
      <img alt="spring-collection" className="spring-collection" src={spring}/>
      <img alt="spring-collection" className="small-spring-collection" src={smallSpring}/>
      <p>
      <span>Covid 19 Update:</span> We encourage you to shop as normal for all your essential products. Non-essentials also available, but shipping delays may occur. No pickup options available. Stay safe NZ!
      </p>
      </div>
    </header>
  )
}
