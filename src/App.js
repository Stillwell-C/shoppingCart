import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import ItemFullPage from "./components/ItemFullPage";
import OrderConfirmation from "./components/OrderConfirmation";
import NotFound from "./components/NotFound";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [itemList, setItemList] = useState([
    {
      name: "Shirt",
      price: 700,
      description: "a black t-shirt",
      type: "clothing",
      img: "/img/shirt.jpg",
      imgSmall: "/img/shirt-small.jpg",
      id: "item00001",
    },
    {
      name: "Jacket",
      price: 1700,
      description: "light brown jacket",
      type: "clothing",
      img: "/img/jacket.jpg",
      imgSmall: "/img/jacket-small.jpg",
      id: "item00002",
    },
    {
      name: "Handbag",
      price: 2400,
      type: "accessories",
      description: "black handbag made with full grain leather",
      img: "/img/handbag.jpg",
      imgSmall: "/img/handbag-small.jpg",
      id: "item00003",
    },
    {
      name: "Backpack",
      price: 1800,
      type: "accessories",
      description: "hand-stiched small black backpack.",
      img: "/img/backpack.jpg",
      imgSmall: "/img/backpack-small.jpg",
      id: "item00004",
    },
    {
      name: "Tote",
      price: 700,
      type: "accessories",
      description: "a black tote bag",
      img: "/img/totebag.jpg",
      imgSmall: "/img/totebag-small.jpg",
      id: "item00005",
    },
    {
      name: "Decorative Stick",
      price: 700,
      type: "interior",
      description: "liven up your room with this stick",
      img: "/img/decorative-stick.jpg",
      imgSmall: "/img/decorative-stick-small.jpg",
      id: "item00006",
    },
    {
      name: "Houseplant",
      price: 800,
      type: "interior",
      description: "a plant",
      img: "/img/houseplant.jpg",
      imgSmall: "/img/houseplant-small.jpg",
      id: "item00007",
    },
  ]);

  return (
    <div>
      <Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <div className='body-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop'>
            <Route index element={<Shop />} />
            <Route path=':collectionName' element={<Shop />} />
            <Route
              path='fullcollection/:itemID'
              element={
                <ItemFullPage
                  itemList={itemList}
                  setShoppingCart={setShoppingCart}
                  shoppingCart={shoppingCart}
                />
              }
            />
          </Route>

          <Route
            path='/checkout'
            element={<Checkout shoppingCart={shoppingCart} />}
          />
          <Route path='/orderconfirmation' element={<OrderConfirmation />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
