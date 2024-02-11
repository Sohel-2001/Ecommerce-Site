import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
import themeSlice from "./themeSlice";


const store = configureStore({
    reducer : {
        cart : cartSlice,
        themeSwitch : themeSlice,
    },
})

export default store;