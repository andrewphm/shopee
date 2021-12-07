# Shopee eCommerce App

[http://andrewpham.ca/shopi-fe](http://andrewpham.ca/shopi-fe)

<a href="http://andrewpham.ca/slackr-fe" target="_blank">
    <img src="./previewshopi.png" alt="Preview of Shopi app"> 
</a>

Shopi is a fully featured e-commerce web application with authentication, content management and an admin dashboard with analytics.

## Features

- User authentication with JWT for added security
- Credit card checkout with Stripe payment method
- Node REST API CRUD operations for products, users, carts, orders, etc.

## Stack

- React for the front-end (Styled-components, react hooks, react router)
- Redux/redux toolkit for state management
- Node.js/express for the back-end
- MongoDB for the backend
- [Stripe](https://stripe.com/en-ca) for checkout
- [Heroku](https://www.heroku.com) used to deploy the server
- Github pages to deploy the frontend

## Insights

### Authentication

- I utilized JWT to create private API calls. A user would need a token and user credentials to make certain CRUD operations/API calls.

## If I had more time I would improve:

- Responsiveness and styles
- Improve admin dashboard analytics with aggregation of orders, users, etc.

#

## Available Scripts

- To start the React development server

```sh
cd client
npm install
npm start
```

- To start the Node development server

```sh
cd server
npm install
npm run dev
```

#

### Client File Structure

```sh
client/src/
├── components    # All UI components
├── redux         # state management files
├── API.js        # REST api requests
├── pages         # Pages
├── App.js        # Routes and initial component renders

```

### Server File Structure

```sh
server/
├── controllers    # Route-handler callback functions
├── models         # data models
├── routes         # Forward request to appropriate controllers
├── index.js       # Main server index with middlewares
```
