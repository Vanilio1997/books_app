
import  getRequestParamsSlice from './slice/getRequestParamsSlice'
import { booksApi } from './slice/getBooksSlice'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
    requestParams: getRequestParamsSlice,
    [booksApi.reducerPath]: booksApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware : (getDefaultMiddlware:any) => getDefaultMiddlware().concat(booksApi.middleware)
})





