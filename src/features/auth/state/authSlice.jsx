import { createSlice } from "@reduxjs/toolkit";
import { loginEmployee, loggedInEmployee } from "../api/authAction";

let authSlice = createSlice({
    name:"auth",
    initialState:{
        employee : null,
        isLoading : false,
    },
    reducers:{
        addEmployee:(state, action) => {
            // state -> current state
            // action -> the action that is dispatched
            state.employee = action.payload
            state.isLoading = false
        },
        removeEmployee:(state) => {
            state.employee = null
            state.isLoading = false
        }
    },

    extraReducers:(builder)=>{ // addCase builder me hai, and its provided by redux, aur kuch bhi naam de sakte hai
        builder
        .addCase(loginEmployee.pending, (state )=>{
            state.isLoading = true;
        })
        .addCase(loginEmployee.fulfilled, (state, action)=>{ // if req is success, you get the res data in action.payload or the 2nd parameter
            state.isLoading = false;
            state.employee = action.payload;
        })
        .addCase(loginEmployee.rejected, (state)=>{
            state.isLoading = false;
        })
        .addCase(loggedInEmployee.pending, (state )=>{
            state.isLoading = true;
        })
        .addCase(loggedInEmployee.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.employee = action.payload;
        })
        .addCase(loggedInEmployee.rejected, (state)=>{
            state.isLoading = false;
        })
    }
    
})

export default authSlice.reducer;  
// reducer is a function that Create Sliice returns in the object along with other properties, reducer is depended on the slice that we make.
// its used to manage the actions.

export const{addEmployee , removeEmployee} = authSlice.actions;  
//reducers me jo likha hai voh jata hai isme
// the functions you write in the reducers will be used to create action creators.
// Action creators are the functions that create actions.
// action   