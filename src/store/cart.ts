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
        let isExist;
        if(state.length>0){
            isExist=state.find((value)=>value.id===action.payload.id);
        }
        if(!isExist){
            let newvalue=state;
            action.payload.quantity=1;
            newvalue.push(action.payload);
            Storage.saveItem(StorageKey.Cart,newvalue);
            state=newvalue;
        }
     },
     REMOVE_CART:(state,action)=>{
        let value=state.filter((value)=>value.id!==action.payload.id);
        Storage.saveItem(StorageKey.Cart,value);
        return state.filter((value)=>value.id!==action.payload.id);
       
     },
     INCREMENT_CART:(state,action)=>{
        let isExist=state.find((value)=>value.id===action.payload.id);
        let value=state;
        console.log(isExist);
        if(isExist){
            // update
            if(isExist.quantity){
                isExist.quantity+=1;
                console.log(isExist);
                Storage.saveItem(StorageKey.Cart,[...value,isExist]);  
            }
        }else{
            // no cart found
            console.log('no product found')
        }
     },
     DECREMENT_CART:(state,action)=>{
        let isExist=state.find((value)=>value.id===action.payload.id);
        let value=state;
        console.log(isExist);
        if(isExist){
            // update
            if(isExist.quantity){
                isExist.quantity-=1;
                console.log(isExist);
                Storage.saveItem(StorageKey.Cart,[...value,isExist]);  
            }
        }else{
            // no cart found
            console.log('no product found')
        }
     }
     
   
    }
})

export const{ADD_CART,REMOVE_CART,INCREMENT_CART,DECREMENT_CART}=cartSlice.actions;
export default cartSlice.reducer;