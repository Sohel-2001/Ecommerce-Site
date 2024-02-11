


// import {createSlice,nanoid} from "@reduxjs/toolkit";

// const initialState = {
//     items : [],
// }


// const cartSlice = createSlice({
//     name : "cart",
//     initialState,
//     reducers : {

//         addToCart : (state,action) => {
//             const item = action.payload;
            

//             const isItemExist = state.items.find((i) => i.id === item.id);


//             if(isItemExist){

//                 // state.items.forEach((i) => {
//                 //     if(i.id === item.id){
//                 //         i.quantity += 1
//                 //     }
//                 // }
//                 // )

//             }

//             else{
//                 state.items.push(item);
//             }
//         },

//         removeToCart : (state,action) => {

//            state.items = state.items.filter((item) => (
//                 item.id !== action.payload
//             ))

//         //    state.items.filter(() => {
//         //         return state.items.map((item) => (
//         //             item.id != prdct.id
//         //         ))
//         //    })
//         }
//     }
// })


// export const{addToCart,removeToCart} = cartSlice.actions

// export default cartSlice.reducer;







import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    items : [],
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {

        addToCart : (state,action) => {
            const item = action.payload;
            

            const isItemExist = state.items.find((i) => i.id === item.id);


            if(isItemExist){

                isItemExist.quantity += 1;

                // state.items.forEach((i) => {
                //     if(i.id === item.id){ 
                //         item.quantity += 1;
                //     }
                // }
                // )

            }

            else{
                state.items.push({
                    ...item,
                    quantity : 1
                });
            }
        },

        removeToCart : (state,action) => {

           state.items = state.items.filter((item) => (
                item.id !== action.payload
            ))

        //    state.items.filter(() => {
        //         return state.items.map((item) => (
        //             item.id != prdct.id
        //         ))
        //    })
        },


        decrement : (state,action) => {
            const item = state.items.find(i => i.id === action.payload);

            if(item.quantity > 1){
                state.items.forEach((i) => {
                    if(i.id === item.id) {
                        i.quantity -= 1;
                    }
                })
            }
        }
    }
})


export const{addToCart,removeToCart,decrement} = cartSlice.actions

export default cartSlice.reducer;




