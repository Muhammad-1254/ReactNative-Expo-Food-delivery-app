import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: null,
}

export const restaurentSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant:(state, action)=>{
        state.restaurant = action.payload;
    
    },
  },
})

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurentSlice.actions;
export const selectRestaurant = state => state.restaurant.restaurant
export default restaurentSlice.reducer