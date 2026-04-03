import { createSlice } from "@reduxjs/toolkit"



let initialState={
  value:0
}

let counterSlice=createSlice({
  name:"counter",
  initialState,
  reducers:{
    increment:(state)=>{state.value=state.value+1},
    decrement : (state)=> {state.value=state.value-1},
    incrementByAmount:(state,action)=>{
      state.value=action.payload+state.value
    }
  }
})

export let {increment,decrement,incrementByAmount}= counterSlice.actions;
export default counterSlice.reducer;