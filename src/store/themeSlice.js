import {createSlice} from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name : "theme",
    initialState : {
        theme : "light"
    },
    reducers :{
        lightMode : (state,action) =>{
                state.theme = "light"
        },

        darkMode : (state,action) => {
                state.theme = "dark"
        }
    }
})

export const{lightMode,darkMode} = themeSlice.actions;

export default themeSlice.reducer;