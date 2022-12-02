import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "@mui/material/Button";

import { React, useState } from "react";

import teaData from "./assets/tea-data.json";
import DisplayItem from "./components/DisplayItem";
import CartItem from "./components/CartItem";

function App() {
  const allTeas = JSON.parse(JSON.stringify(teaData));
  // DISPLAY := list of all tea json objects. Will be filtered/sorted later
  const [displayList, setDisplayList] = useState(
    JSON.parse(JSON.stringify(teaData))
  );
  // By default, load all teas. Will be filtered/sorted later
  // const allTeas = teaData.map((item, index) => makeDisplayItem(item, index));
  // setDisplayList(allTeas);

  // CART stores all items, total cost
  // CART ITEMS: store all tea json object items in cart by default, with additional quantity field set to 0, id: index
  const [cart, setCart] = useState({
    items: teaData.map((item, index) => {
      return { ...item, quantity: 0, id: index };
    }),
    totalCost: 0,
  });
  // ADD: functionally maps with id==index -> quantity + 1, totalCost + price
  function addToCart(id) {
    const newItems = cart.items.map((item, index) =>
      index === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart({
      items: newItems,
      totalCost: cart.totalCost + teaData[id].price,
    });
  }

  function removeFromCart(id) {
    const newItems = cart.items.map((item, index) =>
      index === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart({
      items: newItems,
      totalCost: cart.totalCost - teaData[id].price,
    });
  }

  // FILTERING
  function restoreTeas() {
    setDisplayList(allTeas);
  }

  function filterOut(fn) {
    const newItems = displayList.filter(fn);
    setDisplayList(newItems);
  }

  // function filterCaffeine(yes, fn) {
  //   const newItems = displayList.filter((item) => {
  //     return yes ? item.caffeine > 0 : !(item.caffeine > 0);
  //   });
  //   setDisplayList(newItems);
  // }
  function caffeineYesPred(item) {
    return item.caffeine > 0;
  }
  function caffeineNoPred(item) {
    return !(item.caffeine > 0);
  }

  function looseYesPred(item) {
    return item.loose;
  }
  function looseNoPred(item) {
    return !item.loose;
  }

  function blendYesPred(item) {
    return item.blend;
  }
  function blendNoPred(item) {
    return !item.blend;
  }

  // function blendYesPred(item) {
  //   return item.blend;
  // }
  // function blendNoPred(item) {
  //   return !item.blend;
  // }

  // SORTING

  function sortDisplayList(cmp) {
    const newItems = [...displayList].sort(cmp);
    setDisplayList(newItems);
  }
  function cmpPrice(itemA, itemB) {
    return itemA.price - itemB.price;
  }
  function cmpCaffeine(itemA, itemB) {
    return itemA.caffeine - itemB.caffeine;
  }
  function cmpKey(itemA, itemB) {
    return -1;
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/logo-jasmine-dragon-2.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Jasmine Dragon Fine Teas
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* <Jumbotron> */}
      <div className="Jumbotron">
        <h1>Uncle Iroh's Finest Teas</h1>
        <p>
          Sort teas by price or caffeine content, and filter to only see caffeinated, decaf, loose leaf, or
          bagged teas! Press "All Teas" to reset!
        </p>
        <p>{/* <Button bsStyle="primary">Learn more</Button> */}</p>
      </div>
      {/* </Jumbotron> */}

      {/* FILTERS AND SORTERS */}
      <div className="Options Border">
        <h2>Filters</h2>
        <div className="Filters">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => restoreTeas()}
          >
            All Teas!
          </Button>
          {/* caffeine */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => filterOut(caffeineYesPred)}
          >
            ~Caffeinated~
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => filterOut(caffeineNoPred)}
          >
            -Decaf-
          </Button>
          {/* loose */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => filterOut(looseYesPred)}
          >
            Loose Leaf Teas
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => filterOut(looseNoPred)}
          >
            Single Bag Teas
          </Button>
        </div>
        <hr />
        <h2>Sorting</h2>
        <div className="Sorting">
          <div className="Pad">
            <Button
              className="Sort Pad"
              variant="contained"
              color="secondary"
              onClick={() => sortDisplayList(cmpPrice)}
            >
              Price
            </Button>
          </div>
          <div className="Pad">
            <Button
              className="Sort Pad"
              variant="contained"
              color="secondary"
              onClick={() => sortDisplayList(cmpCaffeine)}
            >
              Caffeine
            </Button>
          </div>
          <div className="Pad">
            <Button
              className="Sort Pad"
              variant="contained"
              color="secondary"
              onClick={() => sortDisplayList(cmpKey)}
            >
              Reverse
            </Button>
          </div>
        </div>
      </div>

      <div className="Box">
        {/* // DISPLAY: filter, sort, addToCart */}
        <div className="Container Display Border">
          {displayList.map((item, index) => (
            <DisplayItem
              className="Item Border"
              key={index}
              item={item}
              // id={id}
              buttonClick={() => addToCart(index)}
            />
          ))}
        </div>
        {/* // CART: changeQuantity, removeFromCart, totalCost */}
        <div className="Cart Border">
          <h1 className="Pad Border NoMargin">Cart</h1>
          <div className="ContainerVert">
            {cart.items.map(
              (item, index) =>
                item.quantity > 0 && (
                  <CartItem
                    className="Item"
                    key={index}
                    item={item}
                    // id={id}
                    buttonClick={() => removeFromCart(index)}
                  />
                )
            )}
          </div>
          {/* {cart.totalCost &&  */}
          <h2 className="Border Pad">Total Cost: {cart.totalCost}$</h2>
          {/* } */}


        </div>
      </div>
    </div>
  );
}

export default App;
