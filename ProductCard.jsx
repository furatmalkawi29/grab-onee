import React, {useContext} from "react";
import {isOverAgeContext} from '../../App'
import "./ProductCard.scss";
import {RiHeartAddLine} from 'react-icons/ri'
import { If } from "react-if";

export default function ProductCard(props) {

  //use conditional rendering to render wine categories price
  //check if its wine --> hide price
  //if not show price 
  //if its wine and isOverAge is true --> show price

  const {isOverAge, setIsOverAge} = useContext(isOverAgeContext);
  
  

  function handleClick (){
    setIsOverAge(true);
  }

  return (
    <div className="product-card">
      <div className="image-container">
        <RiHeartAddLine className="heart-icon"/>
        <img
          alt="product-name"
          src={
            props.data.url
          }
        />
        <div className="overlay">
          <div className="text">{props.data.overlay?props.data.overlay:''}</div>
        </div>
      </div>

      <div className="card-info">
        <div className="text-info">
          <p>{props.data.title}</p>
          <p>{props.data.link?props.data.link:''}</p>
          <p>{props.data.store?props.data.store:''}</p>
        </div>

        <div className="numbers-info">
          <p className="bought">{props.data.bought?`${props.data.bought} bought`:''}</p>
          <div>
            <span className="from-word">{(props.data.isWine&&!isOverAge)?'':'from'}</span>
            <p className="price">
              <span>{props.data.prevPrice?`$${props.data.prevPrice}`:''}
              </span> {(props.data.isWine&&!isOverAge)?'':`$${props.data.price}`}
            </p>
          </div>
        </div>
      </div>
      <If condition={props.data.isWine&&!isOverAge}>
        <p className="over-age" onClick={handleClick}>I'm over 18, show me the price</p>
      </If>
    </div>
  );
}
