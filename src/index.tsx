import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ScrollToTop from "./utils/ScrollToTop";

const client = new ApolloClient({
  uri: "https://shoppingcartapi-production.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ShoppingCartProvider>
          <ScrollToTop />
          <App />
        </ShoppingCartProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
