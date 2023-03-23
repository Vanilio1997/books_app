interface IConfigInterface{
    focused: boolean
    keepUnusedDataFor: number
    middlewareRegistered: boolean
    online: boolean
    reducerPath: string
    refetchOnFocus: boolean
    refetchOnMountOrArgChange: boolean
    refetchOnReconnect: boolean
}

export interface IBooksApi{
    config: IConfigInterface
    mutations: any
    provided: any
    queries: any
    subscriptions: any
}

export interface IRequestParams{
    bookName: string
    orderBy: string
    category: string
    maxResults: number
    startIndex: number
}

export interface IStore{
    booksApi: IBooksApi
    requestParams: IRequestParams
}