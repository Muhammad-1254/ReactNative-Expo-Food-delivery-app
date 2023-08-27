import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cartSlice';
import restaurantSlices from './slices/restaurantSlices';

export const store = configureStore({
  reducer: {
    cart:cardSlice,
    restaurant:restaurantSlices
  },
})