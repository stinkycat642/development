import React from "react";
// import * as React from "react";
import Button from "@mui/material/Button";

export default function CartItem(props) {
  const item = props.item;
  return (
    <div className="CartItem Border">
      <h3 className="Name">{item.name}</h3>
      {/* <div className="Pad">
        <h5>Caffeine: {item.caffeine}mg</h5>
        <h5>{item.price}$/unit</h5>
      </div> */}
      <div>
        <p className="Quantity">Quantity: {item.quantity}</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.buttonClick}
        >
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}
