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
import CartFullPage from "./components/CartFullPage";
import Orders from "./components/Orders";
import OrderCancelConfirmation from "./components/OrderCancelConfirmation";

function App() {
  return (
    <div>
      <Navbar />
      <div className='body-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop'>
            <Route index element={<Shop />} />
            <Route path=':collectionName' element={<Shop />} />
            <Route path='fullcollection/:itemID' element={<ItemFullPage />} />
          </Route>
          <Route path='/cart' element={<CartFullPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderconfirmation' element={<OrderConfirmation />} />
          <Route path='/orders'>
            <Route index element={<Orders />} />
            <Route
              path='cancelconfirmation'
              element={<OrderCancelConfirmation />}
            />
          </Route>
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
