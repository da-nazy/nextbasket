import { createSlice } from "@reduxjs/toolkit";
import Storage from "@/components/util/Storage";
import { StorageKey, cart, product } from "@/components/util";
const initialState:cart=Storage.getItem(StorageKey.Cart,[]);

// FOR ALL CLASSMATES
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
     ADD_CART:(state,action)=>{
        console.log(action.payload,"check payload");
        let isExist=state.find(action.payload.id);
        console.log(isExist,'isExist')
        if(!isExist){
            let newvalue=state;
            newvalue.push(action.payload);
            Storage.saveItem(StorageKey.Cart,newvalue);
            state=newvalue;
        }else{
            console.log("value not exist",action.payload);
        }
       
        
     },
     REMOVE_CART:(state,action)=>{
        let value=state.filter((value)=>value.id!==action.payload.id);
        Storage.saveItem(StorageKey.Cart,value);
        state=value;
     },
     INCREMENT_CART:(state,action)=>{
        let isExist=state.find(action.payload.id);
     
        if(isExist){
            // update
            if(isExist.quantity){
                isExist.quantity+=action.payload.data;
            }
        }else{
            // no cart found
            console.log('no product found')
        }
     },
     DECREMENT_CART:(state,action)=>{
        let isExist=state.find(action.payload.id);
     
        if(isExist){
            // update
            if(isExist.quantity){
                isExist.quantity-=action.payload.data;
            }
        }else{
            // no cart found
            console.log('no product found')
        }
     }
     
   
    }
})

export const{ADD_CART,REMOVE_CART}=cartSlice.actions;
export default cartSlice.reducer;