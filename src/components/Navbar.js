import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import shoppingbag from "../assets/shopping-cart.svg";

const Navbar = ({ shoppingCart, setShoppingCart }) => {
  const [bagOpen, setBagOpen] = useState(false);

  const totalQuantity = shoppingCart.reduce(
    (total, obj) => total + obj.quantity,
    0
  );
  const totalPrice = shoppingCart.reduce(
    (total, obj) => total + obj.price * obj.quantity,
    0
  );

  const handleShoppingBag = () => {
    setBagOpen(!bagOpen);
  };

  const handleReduceQuantity = (currentItem) => {
    if (currentItem.quantity > 1) {
      const itemIndex = shoppingCart.findIndex(
        (obj) => obj.name === currentItem.name
      );
      let updatedShoppingCart = [...shoppingCart];
      updatedShoppingCart[itemIndex].quantity -= 1;
      setShoppingCart(updatedShoppingCart);
    }
  };

  const handleAddQuantity = (currentItem) => {
    console.log(currentItem.name);
    const itemIndex = shoppingCart.findIndex(
      (obj) => obj.name === currentItem.name
    );
    let updatedShoppingCart = [...shoppingCart];
    updatedShoppingCart[itemIndex].quantity += 1;
    setShoppingCart(updatedShoppingCart);
  };

  const handleDeleteItem = (currentItem) => {
    const itemIndex = shoppingCart.findIndex(
      (obj) => obj.name === currentItem.name
    );
    if (itemIndex >= 0) {
      const updatedShoppingCart = [...shoppingCart];
      updatedShoppingCart.splice(itemIndex, 1);
      setShoppingCart(updatedShoppingCart);
    }
  };

  return (
    <nav>
      <div className='nav-container'>
        <Link to='/' className='nav-title' aria-label='link to home page'>
          <h1 className='nav-title-top'>in hands</h1>
          <h4 className='nav-title-bottom'>lifestyle & boutique</h4>
        </Link>
        <div className='nav-right'>
          <NavLink to='/about' aria-label='link to about page'>
            About
          </NavLink>
          <NavLink to='/shop' aria-label='link to shop page'>
            Shop
          </NavLink>
          <div className='shoppingbag-container'>
            <span data-testid='shoppingbag-quantity'>{totalQuantity}</span>
            <button
              onClick={handleShoppingBag}
              aria-label='open shopping cart menu'
            >
              <img
                className='shoppingbag-logo'
                src={shoppingbag}
                alt='shopping bag button'
              />
            </button>
          </div>
        </div>
      </div>
      {bagOpen && (
        <div>
          <div className='shopping-cart-dropdown'>
            <div className='shopping-dropdown-content'>
              <div className='dropdown-header'>
                <h1>Shopping Cart</h1>
                <button
                  onClick={() => setBagOpen(false)}
                  aria-label='close shopping cart menu'
                >
                  ✕
                </button>
              </div>
              {totalQuantity < 1 && (
                <div className='dropdown-empty-container'>
                  <p>Your cart is empty.</p>
                  <Link to='/shop' aria-label='link to shop page'>
                    <button>Shop Now</button>
                  </Link>
                </div>
              )}
              <div className='dropdown-items'>
                {shoppingCart.map((item) => (
                  <div key={item.serial}>
                    <p className='dropdown-name' aria-label='item name'>
                      {item.name}
                    </p>
                    <img src={item.imgSmall} alt={item.name} />
                    <div className='dropdown-quantity'>
                      <button
                        onClick={() => handleReduceQuantity(item)}
                        aria-label='reduce quantity by one'
                      >
                        −
                      </button>
                      <p aria-label='item quantity'>{item.quantity}</p>
                      <button
                        onClick={() => handleAddQuantity(item)}
                        aria-label='increase quantity by one'
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className='dropdown-delete'
                      aria-label='delete item from shopping cart'
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className='dropdown-footer'>
                <h2 aria-label='total cost of items in cart'>
                  Total: L {totalPrice}
                </h2>
                {totalQuantity < 1 && <button disabled>Checkout Now</button>}
                {totalQuantity >= 1 && (
                  <Link to='/checkout' aria-label='link to checkout page'>
                    <button onClick={() => setBagOpen(false)}>
                      Checkout Now
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='shopping-dropdown-background'></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
