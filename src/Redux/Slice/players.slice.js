import { createSlice } from "@reduxjs/toolkit";
import { puneriTV, seansonsData, playersAccordinn , SliderPlayers ,allPlayers ,singlePlayer } from "../Utils/players.action";



const initialState = {
  data: [],
  loading: false,
  error: "",
  message: "",
};

const accordianSlice = createSlice({
  name : 'accordianPlayers',
  initialState,
  extraReducers: (builders)=>{
    builders
    .addCase(playersAccordinn.pending , (state)=>{
       state.loading = true;
    })
    .addCase(playersAccordinn.fulfilled , (state , action)=>{
        state.loading = false;
        state.message = "players fetched succesfully";
        state.data = action.payload;
    })
    .addCase(playersAccordinn.rejected , (state ,action)=>{
        state.loading = false;
        state.error = action.payload || "something went wrong";
    })
  }
})

export const accordianReducer = accordianSlice.reducer;

const seasonSlice = createSlice({
  name:'seasonData',
  initialState,
  extraReducers:(builders)=>{
     builders
     .addCase(seansonsData.pending , (state)=>{
      state.loading = true;
     })
     .addCase(seansonsData.fulfilled , (state ,action)=>{
      state.loading = false
      state.data = action.payload
      state.message = 'data fetched successfully'
     })
     .addCase(seansonsData.rejected ,(state ,action)=>{
      state.loading = false 
      state.error = action.payload ||'something went wrong'
     })
  }
})

export const seasonReducer = seasonSlice.reducer;

const sliderSlice = createSlice({
  name: "sliderPlayers",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(SliderPlayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(SliderPlayers.fulfilled, (state, action) => {
        state.loading = false;
         
        state.message = "players fetched succesfully";
        state.data = action.payload;
      })
      .addCase(SliderPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "something went wrong";
      });
  },
});

export const slideReducer = sliderSlice.reducer;


const initialPlayer = {
  data: [],
  loading: false,
  error: "",
  message: "",
};

const categoryPlayers = createSlice({
    name:'categoryPlayers',
    initialState: initialPlayer ,
    extraReducers: (builders)=>{
        builders
         .addCase(allPlayers.pending , (state)=>{
            state.loading = true;
         })
         .addCase(allPlayers.fulfilled , (state,action)=>{
            state.loading = false;
            const {category_id , players} = action.payload
            state.data[category_id] = players
            state.message = " category feacthed successfully"
         })
         .addCase(allPlayers.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload || "something went wrong"
         })
    }

})

export const categoryReducer = categoryPlayers.reducer;

const singlePlayerState = {
  data : [],
  loading: false,
  message:"",
  error:"",
}


const player = createSlice({
    name:'SinglePlayer',
    initialState:singlePlayerState,
    extraReducers: (builders)=>{
        builders
        .addCase(singlePlayer.pending , (state)=>{
            state.loading = true;
        })
        .addCase(singlePlayer.fulfilled, (state ,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.message = 'Player Data fetched successfully'
        })
        .addCase(singlePlayer.rejected , (state , action)=>{
            state.loading = false;
            state.error = action.payload || 'somwthing went wrong'
        })
    }
})

export const singlePlayerReducer = player.reducer

const puneriSlice = createSlice({
   name:'puneriTv',
   initialState,
   extraReducers: (builders)=>{
      builders
      .addCase(puneriTV.pending , (state)=>{
        state.loading = true
      })
      .addCase(puneriTV.fulfilled ,(state , action)=>{
        state.loading = false
        state.data = action.payload
        state.message = 'fateched successfully'
      })
      .addCase(puneriTV.rejected ,(state ,action)=>{
        state.loading = false
        state.error = 'API Error' , action.payload
      })
   }
})

export const puneriReducer = puneriSlice.reducer;