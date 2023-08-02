import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]   
    },

    //called on dispatch of an action
    reducers:{
        addItem: (state, action) => {
                // state - > is the initialState, action - > is the data which is coming in while dispatch action
                state.items.push(action.payload);
                //this function does not return anything
        },
        removeItem:(state, action) =>{
            // state.items.splice(action.payload.index,1)
            state.items.pop()
        },
        clearCart : () => {
            state.items = [];
        }
    }
})
export const {addItem, removeItem, clearCart} = cartSlice.actions; 
export default cartSlice.reducer;


// cartSlice = {
//     actions: {
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer: reducers
// }