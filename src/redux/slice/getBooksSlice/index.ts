import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IRequestParams } from 'types/IStore';
import { IResponseBooksInterface } from 'types/IResponse';
import { IItemsBooks } from 'types/IResponse';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (build )=>({
        getBooks: build.query<IResponseBooksInterface , IRequestParams>({
            query:({ orderBy, bookName, maxResults, startIndex,category}) => {
                return  `?q=${bookName}subject:${category}&orderBy=${orderBy}&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`
            },
        }),
        getBook: build.query<IItemsBooks , string>({
            query:(id) => `/${id}?key=${process.env.REACT_APP_API_KEY}`
        })
    }),
})

export const {useGetBooksQuery ,useGetBookQuery} = booksApi