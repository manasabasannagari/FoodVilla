import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./../utils/cartSlice";

const store = configureStore({
//contains slices
reducer:{
    cart: cartSlice
}
});


export default store;


/**
 * STEP1: Create a store file
 *          using configureStore()     --> (redux toolkit)
 * 
 * ------------------------------------------------------------------------
 * 
 * STEP2: Provide the store to app
 *          <Provider store = {store}> </Provider>    --> (react-redux)
 * 
 * -----------------------------------------------------------------------
 * 
 *STEP3: Create slice
        createSlice({            -->(react toolkit)
            name:                    //name of the slice
            initialState: []         //initial state of slice
            reducers: {
                addItem : (state,action) => { 
                    // state is the current state
                    // action is the data coming from dispatch action
                },
                removeItem : (state,action) => {

                }
            }
        })
        export default cartSlice.reducer;
        export {addItem. removeItem} = cartSlice.actions;
 * 
 * STEP4: Add the slice in the store
 *          configureSlice({
 *          reducer:{
 *                  cart: cartSlice
 *                  }
 *          })
 *  
 */