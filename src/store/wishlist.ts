import { createSlice } from "@reduxjs/toolkit";
import Storage from "@/components/util/Storage";
import { StorageKey, wishlist } from "@/components/util";
const initialState:wishlist=Storage.getItem(StorageKey.Wishlist,[]);

// FOR ALL CLASSMATES
export const wishlistSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
     ADD_WISHLIST:(state,action)=>{
        let isExist;
        if(state.length>0){
            isExist=state.find((value)=>value.id===action.payload.id);
        }
        if(!isExist){
            let newvalue=state;
            newvalue.push(action.payload);
            Storage.saveItem(StorageKey.Wishlist,newvalue);
            state=newvalue;
        }
     },
     REMOVE_WISHLIST:(state,action)=>{
        let newItem=state.filter((value)=>value.id!==action.payload.id);
        Storage.saveItem(StorageKey.Wishlist,newItem);
         //    state=newItem;
        return state.filter((value)=>value.id!==action.payload.id);
       
     },
   
    }
})

export const{ADD_WISHLIST,REMOVE_WISHLIST}=wishlistSlice.actions;
export default wishlistSlice.reducer;