import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newobj = { ...action.payload, uuid };
      state.push(newobj);
    },

    // increment of item in card
    addItem(state, action) {
      let obj = state.find(
        (value) =>
          value.id == action.payload.id &&
          value.color == action.payload.color &&
          value.size == action.payload.size
      );
      if (obj) {
        ++obj.quantity;
        let newState = state.filter((value) => value.id !== obj?.id);
        state = [...newState, obj];
        return;
      }
    },

    // decrement of item
    subItem(state, action){
      let obj = state.find(
        (value) =>
          value.id == action.payload.id &&
          value.color == action.payload.color &&
          value.size == action.payload.size
      );
      if (obj !==undefined) {
        if(obj.quantity<=1){
          return  state.filter((value) => value.uuid !== obj?.uuid);
        }
        --obj.quantity;
        let newState = state.filter((value) => value.uuid !== obj?.uuid);
        state = [...newState, obj];
        return;
      }
    },

    // delete for the cart
    deleteItem(state, { payload }) {
      return state.filter((value) => value.uuid !== payload);
    },
  },
});

export const { addToCart, deleteItem, addItem ,subItem } = cartSlice.actions;

export default cartSlice.reducer;
