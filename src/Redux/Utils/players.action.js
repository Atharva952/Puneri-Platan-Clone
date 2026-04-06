
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosNew from "./axiosNew";
// import { data } from "react-router-dom";

export const playersAccordinn = createAsyncThunk('accordian/players', async()=>{
    
    const ids = [1,2,3]
    let allPlayers = [];
    for(const id of ids){
        const response = await axiosNew.get(`/player_list?cat_id=${id}`)
        allPlayers.push(response.data)
    }

    return allPlayers;
})

export const seansonsData = createAsyncThunk('season/data',async ()=>{
    const seasonId = [1,3,4]
    const response = await Promise.all(
        seasonId.map(id => axiosNew.get(`/gallary_list?cat_id=${id}`))
    )

    return response.map(res =>({
        season: res.data.cat_name,
        data: res.data
    }));

  
})


export const SliderPlayers = createAsyncThunk('sliderPlayers/fetchPlayers',async(category_id, thunkAPI)=>{
    try {
        const response = await axiosNew.get(`/player_list?cat_id=${category_id}`)
       return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'API Error')
       
    }
})

export const allPlayers = createAsyncThunk('CategoryPlayer' , async(category_id)=>{
    try{
        const response = await axiosNew.get(`/player_list?cat_id=${category_id}`)
        return{
            category_id,
           players:response.data
        }
    } catch(error){
        console.error(error|| 'API Error');
        
    }
})

export const singlePlayer = createAsyncThunk('SinglePlayer', async(playerId)=>{
    try {
        const response = await axiosNew.get(`/single_player?id=${playerId}`)
        return response.data;
    } catch (error) {
        console.error(error|| 'something went wrong  in API');
        
    }
})

export const puneriTV = createAsyncThunk('puneri' , async()=>{
    try {
        const ids = Array.from({length:11},(_,i)=> i +1)
        
        const response = await Promise.all(
            ids.map(id=>axiosNew.get(`single_puneri_tv?id=${id}`))
        )

        return response.map(res=> res.data)
        
    } catch (error) {
        console.error('api error',error);
        
    }
})