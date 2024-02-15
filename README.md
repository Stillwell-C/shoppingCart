# Shopping Cart App

This repository is the frontend for a shopping cart application.

The front end is based off of an old javascript-only project that I mostly converted to TypeScript, and I am working to update and improve many aspects of it. The tests currently do not work for this incarnation of the project, but I hope to update these soon.

I made this project primarily to practice Typescript, NestJS, GraphQL, and Prisma.

## Demo

The application is not currently live, but I will have it hosted soon.

## Backend code

View the backend code [here](https://github.com/Stillwell-C/shoppingCartAPI)

## Description

### Overview

- TypeScript front & back ends
- NestJS backend
- GraphQL
- Apollo Client
- PostgreSQL database with Prisma ORM
- Backend validation with Class Validator
- Add/Delete/Modify products in your cart
- Complete checkout to make an order
- View/Cancel orders

#### Detailed Description

This application was made to function as a ecommerce site.

#### UI

CSS was used to style this website. The CSS was made when I was less familiar with CSS & mobile first design, so this is not my best work. Please view other projects to assess my abilities as this does not reflect my current level. I hope to soon update this to a better, mobile-first UI, probably with TailwindCSS.

#### Backend

The main reason I reused this front end project (originally it was only a front end project), was to get practice with backend technologies I had never used. In this case, I was specifically trying to practice using GraphQL with NestJS and get my first experience of Prisma's ORM. This was not my first time developing a backend in TypeScript, but is probably the most complex backend I have made using TypeScript.

#### Areas Currently Needing Improvement

##### UI

This website is not currently responsive. I hope to update this, possibly with TailwindCSS instead of the current CSS.

##### Accessibility

The frontend was made before I knew much about web accessibility. Therefore, there a many issues that need to be fixed including incorrect used aria-labels and headings.

##### Back End

This was my first time building my own project with GraphQL or NestJS. I will try to continue to hone and improve this code. Currently I am working on improving error handling.

#### Possible future features

##### Login & Cart Saving

I am planning on making it possible for users to make accounts and save their carts on the database. There is currently some provisional work on the cart on the backend, but I haven't had much time to invest in this yet.

## Built with

### Frontend

- ReactJS
- React Router
- Apollo Client
- CSS

### Backend

- NestJS
- Prisma ORM
- PostgreSQL
