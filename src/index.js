import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-26aznzv167gyb0oi.us.auth0.com
//arnMACz9DCV5ugRmUgHC3clHoERfMmN1
ReactDOM.render(
    <Auth0Provider
    domain="dev-26aznzv167gyb0oi.us.auth0.com"
    clientId="arnMACz9DCV5ugRmUgHC3clHoERfMmN1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
    <ProductsProvider>
        <FilterProvider>
        <CartProvider>
        <App/>
        </CartProvider>
        </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>, 
    document.getElementById('root'));
