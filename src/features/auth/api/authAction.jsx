import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/AxiosInstance";

export let loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) =>{
        try {
            let response = await axiosInstance.post("/auth/login", credentials);
            console.log(response.data.data); // console karke dekh lo, when api post is hit yeh response aata hai, now we have to store it somewhere
            // here comes extraReducers
            return response.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }    
)


// this function needs to be called after each reload, so isse appRoutes me callenge
export let loggedInEmployee = createAsyncThunk(
    "auth/me",
    async (_, thunkApi) => {
        try{
            let response = await axiosInstance.get("/auth/me");
            console.log(response.data.user);
            return response.data.user;
        }
        catch(error){
            return thunkApi.rejectWithValue(error);
        }
    }
)