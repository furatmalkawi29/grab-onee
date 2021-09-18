import React from "react";
import "./CategoryCard.scss";
import { IoIosArrowForward } from "react-icons/io";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.PNG";

export default function CategoryCard(props) {
  let imageUrl;
  let groceryStyle ='';
  let otherStyle='other-style';

  switch (props.data.url) {
    case "p1":
      imageUrl = p1;
      break;
    case "p2":
      imageUrl = p2;
      break;
    case "p3":
      imageUrl = p3;
      break;
    case "p4":
      imageUrl = p4;
      break;
    case "p5":
      imageUrl = p5;
      groceryStyle="grocery-style"
      break;
    default:
      break;
  }

  return (
    <div className="category-card product-card">
      <div className="image-container">
        <img alt="product-name" src={imageUrl} />
        <div className="overlay">
          <div className="text">{props.data.overlay}</div>
        </div>
      </div>

      <div className={`card-info category-info ${!groceryStyle.length?otherStyle:groceryStyle}`}>
        <div className="category-text">
          <h1>{props.data.title}</h1>
          <p>Multiple deals</p>
          <button className="collection-button">
            View Collection <IoIosArrowForward className="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
