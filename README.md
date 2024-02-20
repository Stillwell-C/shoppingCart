# Shopping Cart App

This repository is the front end for an E-commerce application.

The front end is based off of an old javascript-only project that I converted to TypeScript. The tests currently do not work for this incarnation of the project, but I hope to update these soon.

I made this project primarily to practice Typescript, NestJS, GraphQL, and Prisma.

## Demo

The application is live [here](https://shopping-cart-henna-zeta.vercel.app/).

## Backend code

View the backend code [here](https://github.com/Stillwell-C/shoppingCartAPI)

## Description

### Overview

- TypeScript front & back ends
- NestJS backend
- GraphQL
- Apollo Client
- PostgreSQL database with Prisma's ORM
- Backend validation with Class Validator
- TailwindCSS
- Add/Delete/Modify products in your cart
- Complete checkout to make an order
- View/Cancel orders
- Submit email for mailing list

#### Detailed Description

This application was made to function as a basic e-commerce site.

##### UI

I converted the CSS from the original project to TailwindCSS and partially updated the original design. This website is still not responsive. I hope to find the time to create a more responsive, mobile-first UI for this front end soon. To see responsive UIs that are more reflective of my abilities, please look at the following full-stack projects:

- [Instagram-like social media application](https://github.com/Stillwell-C/gram-copy)
- [Blogging application](https://github.com/Stillwell-C/blog-frontend)
- [Photo tagging game](https://github.com/Stillwell-C/photoTag)

##### Back End

The primary reason I updated this front end project (originally it was front end only), was to get practice with new back end frameworks. In this case, I was specifically trying to practice using GraphQL with NestJS and get my first experience with an ORM. This was not my first time developing a backend in TypeScript, but is probably the most complex backend I have made using TypeScript. I enjoyed developing with these frameworks and will continue to hone and improve this code as I learn more about them. Currently, I am working on improving error handling.

##### Accessibility

The original front end was made before I knew much about web accessibility. I have tried to update this to improve accessibility; however, there may still be areas for improvement.

##### Cart

The cart currently only saved locally. React Context API is used to make this data available throughout the application, and local storage is being used to persist this information. In the future, I would like to store this information server-side for users who have made accounts.

##### Products

The products displayed in the shop and item pages are stored only in the backend and are queried when navigating to these pages. Products can be filtered by department on the shop page. Each product has a set amount of stock and a stock_level. The exact amount of stock is not shared with the front end, so the stock_level allows the front end to warn users when a product is low in stock or out of stock. The front end will prevent users from purchasing products that are out of stock. The back end will also confirm that sufficient stock of a product exists before proceeding with creating an order and will send an error if stock is insufficient. When an order is created, the quantity of product ordered by the user will be deducted from a product's stock. Stock_levels will also be adjusted if necessary.

##### Orders

Create an order by adding at least one item to the cart and completing the checkout page. Nothing will be done with the data recieved, but please be warned that this information is currently not being encryted. Basic form validation (mostly confirming input/length) is being used here, but credit card numbers are only validated for length, so please make up this information. You can input any date between the current month and the next 6 years for the credit card expiry.

If an order is successfully recieved, the front end will display your order number.

To view your order, go to the orders page (by following the link [here](https://shopping-cart-henna-zeta.vercel.app/orders) or clicking on the 'Orders' link in the footer) and enter the order number you recieved into the input. This will display information including the contents of your order, the total price, order status, and date of order. This will also allow you to cancel your order. Users are not able to cancel orders if the order status is "SHIPPED" or "COMPLETED" (There is currently no mechanism in place to alter this an order's status except by accessing the database directly. All orders are "PENDING" by default, so you should be able to cancel any order made.). If a user successfully cancels their order, stock levels for the products they ordered will be adjusted in the database and the order (and all related data) will be removed from the database.

##### Email

Users can submit an email using the form in the footer. Currently, no email is sent and this data is only stored in the database.

#### Possible future features

##### Login & Cart Saving

I am planning on making it possible for users to make accounts and save their carts on the database. There is currently some provisional work on the cart on the backend, but I haven't had much time to invest in this yet.

##### Data encryption

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
