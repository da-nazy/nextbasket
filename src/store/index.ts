
import { configureStore } from '@reduxjs/toolkit';
import Cart from './cart';
import Wishlist from './wishlist';
const store=configureStore({
    reducer:{
      cart:Cart,
      wishlist:Wishlist
    }
})

export default store;