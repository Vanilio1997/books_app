import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


const getRequestParamsSlice = createSlice({
    name:'getRequestParamsSlice',
    initialState :{
        categories: 'all',
        orderBy: 'relevance',
        bookName: '',
        maxResults:20,
        startIndex: 0
    },
    reducers:{
        changeCategories:(state,action: PayloadAction<string> ) => {
            state.categories = action.payload
        },
        changeSortingCategory:(state,action: PayloadAction<string> ) => {
            state.orderBy = action.payload
        },
        changeBookName:(state,action: PayloadAction<string> ) => {
            state.bookName = action.payload
        },
        changeMaxResults:(state) => {
            state.maxResults = state.maxResults + 20
        },
        changeStartIndex:(state) => {
            state.startIndex = state.startIndex + 20
        }
    }
})

export default getRequestParamsSlice.reducer

export const {changeBookName, changeCategories, changeMaxResults, changeSortingCategory, changeStartIndex} = getRequestParamsSlice.actions