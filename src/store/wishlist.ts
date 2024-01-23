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
        let isExist=state.find(action.payload.id);
        if(!isExist){
            let newvalue=state;
            newvalue.push(action.payload.data);
            Storage.saveItem(StorageKey.Wishlist,newvalue);
            state=newvalue;
        }else{
            console.log("value not exist",action.payload);
        }
       
        
     },
     REMOVE_WISHLIST:(state,action)=>{
        let value=state.filter((value)=>value.id!==action.payload.id);
        Storage.saveItem(StorageKey.Wishlist,value);
        state=value;
     },
   
    }
})

export const{ADD_WISHLIST,REMOVE_WISHLIST}=wishlistSlice.actions;
export default wishlistSlice.reducer;