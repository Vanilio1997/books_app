
import  getRequestParamsSlice from './slice/getRequestParamsSlice'
import getFilterSlice from './slice/getFilterSlice'
import { booksApi } from './slice/getBooksSlice'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
    requestParams: getRequestParamsSlice,
    filter: getFilterSlice,
    [booksApi.reducerPath]: booksApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware : (getDefaultMiddlware:any) => getDefaultMiddlware().concat(booksApi.middleware)
})





