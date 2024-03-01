# Shopping Cart App

This repository is the front end for an E-commerce application.

The front end is based off of an old javascript-only project that I converted to TypeScript. The tests currently do not work for this incarnation of the project, but I hope to update these soon.

I made this project primarily to practice Typescript, NestJS, GraphQL, and Prisma.

## Demo

The application is live [here](https://shopping-cart-henna-zeta.vercel.app/).

## Backend code

View the backend code [here](https://github.com/Stillwell-C/shoppingCartAPI)

## Contents

- [Description](#description)
  - [Overview](#overview)
  - [Detailed Description](#detailed-description)
    - [UI](#ui)
    - [Back End](#back-end)
    - [Accessibility](#accessibility)
    - [Cart](#cart)
    - [Products](#products)
    - [Orders](#orders)
    - [Email](#email)
  - [Possible Features](#possible-future-features)
    - [Login & Cart Saving](#login--cart-saving)
    - [Data encryption](#data-encryption)
- [Built With](#built-with)
- [Screenshots](#screenshots)
  - [Desktop](#desktop)
  - [Mobile](#mobile)

## Description

### Overview

- TypeScript front & back ends
- NestJS backend
- GraphQL
- Apollo Client
- PostgreSQL database with Prisma's ORM
- Backend validation with Class Validator
- TailwindCSS
- Response, mobile-first UI
- Context API
- Add/Delete/Modify products in your cart
- Complete checkout to make an order
- View/Cancel orders
- Submit email for mailing list

### Detailed Description

This application was made to function as a basic e-commerce site.

#### UI

I converted the CSS from the original project to TailwindCSS and updated the UI to be responsive and mobile first. All pages should now work on any sized screen from small mobile devices to ultra-wide screens. For examples of other mobile-first designs I have made, please check the following projects:

- [Instagram-like social media application](https://github.com/Stillwell-C/gram-copy)
- [Blogging application](https://github.com/Stillwell-C/blog-frontend)
- [Photo tagging game](https://github.com/Stillwell-C/photoTag)

#### Back End

The primary reason I updated this front end project (originally it was front end only), was to get practice with new back end frameworks. In this case, I was specifically trying to practice using GraphQL with NestJS and get my first experience with an ORM. This was not my first time developing a backend in TypeScript, but is probably the most complex backend I have made using TypeScript. Developing this project in TypeScipt helped me improve my knowledge of the language and saved me from making countless errors as I worked with a framework, API query language, and ORM that were unfamiliar to me. I think this project really helped demonstrate the advantages of TypeScript for me. I enjoyed developing with these frameworks and will continue to hone and improve this code as I learn more about them. Currently, I am working on improving error handling.

#### Accessibility

The original front end was made before I knew much about web accessibility. I have tried to update this to improve accessibility and think that most aspects of this website are now A11y friendly; however, there may still be areas for improvement.

#### Cart

The cart is currently only saved locally. React Context API is used to make this data available throughout the application, and local storage is being used to persist this information. In the future, I would like to store this information server-side for users who have made accounts.

#### Products

The products displayed in the shop and item pages are stored only in the backend and are queried when navigating to these pages. Products can be filtered by department on the shop page. Each product has a set amount of stock and a stock_level. The exact amount of stock is not shared with the front end, so the stock_level allows the front end to warn users when a product is low in stock or out of stock. The front end will prevent users from purchasing products that are out of stock. The back end will also confirm that sufficient stock of a product exists before proceeding with creating an order and will send an error if stock is insufficient. When an order is created, the quantity of product ordered by the user will be deducted from a product's stock. Stock_levels will also be adjusted if necessary.

#### Orders

Create an order by adding at least one item to the cart and completing the checkout page. Nothing will be done with the data recieved, but please be warned that this information is currently not being encryted. Basic form validation (mostly confirming input/length) is being used here, but credit card numbers are only validated for length, so please make up this information. You can input any date between the current month and the next 6 years for the credit card expiry.

If an order is successfully recieved, the front end will display your order number.

To view your order, go to the orders page (by following the link [here](https://shopping-cart-henna-zeta.vercel.app/orders) or clicking on the 'Orders' link in the footer) and enter the order number you recieved into the input. This will display information including the contents of your order, the total price, order status, and date of order. This will also allow you to cancel your order. Users are not able to cancel orders if the order status is "SHIPPED" or "COMPLETED" (There is currently no mechanism in place to alter an order's status except by accessing the database directly. All orders are "PENDING" by default, so you should be able to cancel any order made.). If a user successfully cancels their order, stock levels for the products they ordered will be adjusted in the database and the order (and all related data) will be removed from the database.

#### Email

Users can submit an email using the form in the footer. Currently, no email is sent and this data is only stored in the database.

### Possible future features

#### Login & Cart Saving

I am planning on making it possible for users to make accounts and save their carts on the database. There is currently some provisional work on the cart on the backend, but I haven't had much time to invest in this yet.

#### Data encryption

Currently, data such as the credit card information is not being encrypted before being stored in the data base. This would pose a security threat for a real application, so I may encrypt this information in the future with bcrypt or other package.

## Built with

### Frontend

- React
- React Router
- Apollo Client
- TailwindCSS

### Backend

- NestJS
- Prisma ORM
- PostgreSQL

## ScreenShots

### Desktop

#### Home Page

![home page top](./ProjectImages/HomePage.png)
![home page links](./ProjectImages/HomePageLinks.png)

#### About Page

![about page top](./ProjectImages/AboutPage.png)

#### Shop Page Full Collection

![shop page full collection](./ProjectImages/ShopFull.png)

#### Shop Page Accessories

![shop page accessories](./ProjectImages/ShopAccessories.png)

#### Shop Page Clothing

![shop page clothing](./ProjectImages/ShopClothing.png)

#### Shop Page Loading

![shop page loading](./ProjectImages/ShopLoading.png)

#### Item Page - Item In Cart

![item page with item in cart](./ProjectImages/ItemInCart.png)

#### Item Page - Item Low in Stock

![item page with item low in stock](./ProjectImages/ItemLowStock.png)

#### Item Page - Item Out of Stock

![item page with item out of stock](./ProjectImages/ItemOutofStock.png)

#### Cart Drop Down Menu

![cart drop down menu](./ProjectImages/CartDropDown.png)

#### Cart Full Page

![cart full page](./ProjectImages/CartFull.png)

#### Checkout Page

![checkout page](./ProjectImages/Checkout.png)

#### Checkout Page Form Error Messages

![checkout page form error messages](./ProjectImages/CheckoutError.png)

#### Order Confirmation Page

![order confirmation page](./ProjectImages/OrderSuccess.png)

#### Check Order Page

![check order page](./ProjectImages/OrderConfirmation.png)

#### Cancel Order Confirmation Page

![cancel order confirmation page](./ProjectImages/OrderCancel.png)

### Mobile

#### Home Page

<img src="./ProjectImages/MobileHome.PNG" alt="mobile home page" height="500" >

<img src="./ProjectImages/MobileHome2.PNG" alt="mobile home page links" height="500" >

#### About Page

<img src="./ProjectImages/MobileAbout.PNG" alt="mobile about page" height="500" >

#### Shop Page

<img src="./ProjectImages/MobileStore.PNG" alt="mobile shop page" height="500" >

##### Shop Loading

<img src="./ProjectImages/MobileStoreLoading.PNG" alt="mobile shop page loading" height="500" >

#### Item page

<img src="./ProjectImages/MobileItemFullPage.PNG" alt="mobile item page" height="500" >

#### Cart Drop Down Menu

<img src="./ProjectImages/MobileCartDropDown.PNG" alt="mobile cart drop down menu" height="500" >

#### Cart Page

<img src="./ProjectImages/MobileCartFullPage.PNG" alt="mobile cart page" height="500" >

#### Checkout

<img src="./ProjectImages/MobileCheckout.PNG" alt="mobile checkout" height="500" >

##### Checkout Order Preview

<img src="./ProjectImages/MobileOrderPreview.PNG" alt="mobile checkout order preview" height="500" >

#### Order Processing

<img src="./ProjectImages/MobileOrderProcessing.PNG" alt="mobile order processing page" height="500" >

#### Order Confirmation

<img src="./ProjectImages/MobileOrderConfirmation.PNG" alt="mobile order confirmation" height="500" >

#### Check Order Page

<img src="./ProjectImages/MobileOrderSearch.PNG" alt="mobile check order search" height="500" >

<img src="./ProjectImages/MobileOrderLookup.PNG" alt="mobile check order page" height="500" >
