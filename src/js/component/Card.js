import React from "react";

function Card() {
  
  return(
<div className="card" style={{width: "18rem"}} >
  <img src="https://placekitten.com/100" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">This is Card</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in.</p>
    <a href="#" className="btn btn-primary">Find out</a>
  </div>
</div>
);
}
export default Card;