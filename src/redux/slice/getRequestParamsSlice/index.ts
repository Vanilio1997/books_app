import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


const getRequestParamsSlice = createSlice({
    name:'getRequestParamsSlice',
    initialState :{
        orderBy: 'relevance',
        category: '',
        bookName: '',
        maxResults:30,
        startIndex: 0
    },
    reducers:{
        changeSortingCategory:(state,action: PayloadAction<string> ) => {
            state.orderBy = action.payload
        },
        changeBookName:(state,action: PayloadAction<string> ) => {
            state.bookName = action.payload
        },
        changeFilterCategory:(state,action: PayloadAction<string> ) => {
            state.category = action.payload
        },
        changeStartIndex:(state) => {
            state.startIndex = state.startIndex + 30
        },
        resetStartIndex:(state) => {
            state.startIndex = 0
        }
    }
})

export default getRequestParamsSlice.reducer

export const {changeBookName, changeSortingCategory, changeStartIndex, changeFilterCategory, resetStartIndex} = getRequestParamsSlice.actions