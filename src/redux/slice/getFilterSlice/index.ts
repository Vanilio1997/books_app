import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


const getFilterSlice = createSlice({
    name:'getFilterSlice',
    initialState :{
        categories: 'all',

    },
    reducers:{
        changeFilterCategory:(state,action: PayloadAction<string> ) => {
            state.categories = action.payload
        },
    }
})

export default getFilterSlice.reducer

export const { changeFilterCategory } = getFilterSlice.actions