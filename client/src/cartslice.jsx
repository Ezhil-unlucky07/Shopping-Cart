import {createSlice , configureStore} from "@reduxjs/toolkit"

const initialState = {
    items:[]
}
const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addcart(state,action){
            const {productid,quantity,amt,img,name} = action.payload;
            const index = (state.items).findIndex(item=>item.productid === productid);
            if(index>=0){
                state.items[index].quantity += quantity;
            }
            else{
                state.items.push({productid,quantity,amt,img,name})
            }
        },
        increment(state, action) {
            const productId = action.payload;
            const index = state.items.findIndex(item => item.productid === productId);
            if (index >= 0) {
                state.items[index].quantity += 1;
            }
            },
            decrement(state, action) {
            const productId = action.payload;
            const index = state.items.findIndex(item => item.productid === productId);
            if (index >= 0 && state.items[index].quantity > 1) {
                state.items[index].quantity -= 1;
            }
            //  else if (index >= 0) {
            //     state.items.splice(index, 1); // remove item if quantity becomes 0
            // }
            },
            removeItem(state,action){
              const productId = action.payload;
              const index = state.items.findIndex(item => item.productid === productId);
              state.items.splice(index,1)
             }
         }
})

export const{addcart,removecart,increment,decrement,removeItem} = CartSlice.actions;

const store = configureStore({
    reducer:{
        cart: CartSlice.reducer
    }
})

export default store;
