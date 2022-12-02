import React from "react";
// import * as React from "react";
import Button from "@mui/material/Button";

export default function DisplayItem(props) {
  const item = props.item;
  return (
    <div className="Item Border">
      <h2 className="Name">{item.name}</h2>
      <p className="Description">
        {item.description} {item.name} has <b>{item.caffeine}mg</b> of caffeine.
      </p>
      <div className="ContentBox">
        <div className="PriceBox">
          <h3>{item.price}$</h3>
          <h5>Caffeine: {item.caffeine}mg</h5>
          <h5>{item.loose ? "Loose Leaf" : "Bagged"} </h5>
          <h5>{item.blend ? "Blend of Teas" : "Pure Tea"} </h5>
          <h5>
            Base: {item.base.charAt(0).toUpperCase() + item.base.slice(1)}
          </h5>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.buttonClick}
          >
            Add to Cart!
          </Button>
        </div>
        <img className="Image" src={item.image} alt="{item.name}" />
      </div>
    </div>
  );
}
