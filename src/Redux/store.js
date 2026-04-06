import { configureStore } from "@reduxjs/toolkit";
import { puneriReducer,seasonReducer, accordianReducer, slideReducer , categoryReducer ,singlePlayerReducer } from "./Slice/players.slice";


const store = configureStore({
    reducer:{
        SliderPlayers: slideReducer,
        Category : categoryReducer,
        SinglePlayer : singlePlayerReducer,
        accordianPlayers : accordianReducer,
        seasonData : seasonReducer,
        puneriTv : puneriReducer,
    }
})

export default store