import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


const getRequestParamsSlice = createSlice({
    name:'getRequestParamsSlice',
    initialState :{
        orderBy: 'relevance',
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
        changeMaxResults:(state) => {
            state.maxResults = state.maxResults + 30
        },
        changeStartIndex:(state) => {
            state.startIndex = state.startIndex + 30
        }
    }
})

export default getRequestParamsSlice.reducer

export const {changeBookName,  changeMaxResults, changeSortingCategory, changeStartIndex} = getRequestParamsSlice.actions