import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const Footer = () => {
  const [formMessage, setFormMessage] = useState("none");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFormMessage("none");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = emailRegex.test(email);
    if (valid) {
      setFormMessage("success");
      setEmail("");
      return;
    }
    setFormMessage("failure");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-header'>
            <h1>Get Updates from in hands</h1>
            <p>
              Get information on discounts and sales delivered straight to your
              inbox
            </p>
            <form noValidate onSubmit={handleSubmit}>
              <input
                type='email'
                value={email}
                onChange={handleInput}
                placeholder='Enter your email address'
                autoComplete='false'
                aria-label='Sign up for updates'
              />
              <button type='submit'>Sign Up</button>
            </form>
            {formMessage === "success" && (
              <span className='footer-form-msg footer-form-success'>
                Thank you for signing up!
              </span>
            )}
            {formMessage === "failure" && (
              <span className='footer-form-msg footer-form-failure'>
                Please input a valid email address.
              </span>
            )}
          </div>
          <div>
            <h1>in hands</h1>
            <Link to='/about'>About us</Link>
          </div>
          <div>
            <h1>Shop</h1>
            <Link to='/shop'>Full Collection</Link>
            <Link to='/shop/clothing'>Clothing</Link>
            <Link to='/shop/accessories'>Accessories</Link>
            <Link to='/shop/interior'>Interior</Link>
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>customersupport@inhands.com.md</p>
          </div>
        </div>
        <div className='footer-bottom'></div>
      </div>
    </footer>
  );
};

export default Footer;
