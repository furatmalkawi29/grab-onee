import React from "react";
import "./Section.scss";
import { IoIosArrowForward } from "react-icons/io";

export default function Section(props) {

  return (
    <section>
      <div className="section-header">
        <h1>{props.header}</h1>
        <button>
          View More
          <IoIosArrowForward className="right-arrow" />
        </button>
      </div>

      <div className="cards-container">{props.children}
      
      
      </div>
    </section>
  );
}
