import React from "react";


function Product(props) {

  return (
    <>
      <div className="row" data-aos="fade-up" data-aos-delay="200">
        <div className="season-filters">
          <img src={props.data.imageUrl1} className="menu-img zoom" alt="" />
          <div className="menu-content">
            <span>{props.data.name}</span>
            <span className="price">
              {props.data.mug ?
                <span className="abbrevation"> &#36;{props.data.cost}| &#36;{props.data.mug} </span>
                : <span className="abbrevation">&#36;{props.data.cost}
                </span>}
              {/* <span className="abbrevation"></span> <span className="abbrevation"></span> */}
            </span>
          </div>

          <div className="menu-ingredients">
            <span className="text-secondary font-bold">{props.data.details} </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
