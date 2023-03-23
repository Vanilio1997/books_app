
import Header from 'components/Header'
import Button from 'components/Buttton'
import s from './BooksList.module.css'
import { useGetBooksQuery } from 'redux/slice/getBooksSlice'
import Loader from 'components/Loader'
import { UseTypedSelector } from 'hooks/UseTypedSelector'
import { IRequestParams } from 'types/IStore'
import { IGetBooksQueryInterface } from './types'
import { IResponseBooksInterface } from 'types/IResponse'
import { IItemsBooks } from 'types/IResponse'
import ResultCount from 'components/ResultCount'
import BooksListMap from 'components/BooksListMap'
import { useDispatch } from 'react-redux'
import {  changeStartIndex } from 'redux/slice/getRequestParamsSlice'
import { useState , useEffect} from 'react'

export const BooksList = () => {
  const requestParams:IRequestParams = UseTypedSelector(store => store.requestParams)
  const {data = [], isLoading, isError}   = useGetBooksQuery(requestParams)
  const [ paginationData, setPaginationData] = useState<any>(null)
  const [isPagination , setIsPagination] = useState(false)

  const dispatch = useDispatch()
  function getMoreBooks(){
    dispatch(changeStartIndex())
    setIsPagination(true)
  }

  useEffect(()=>{
    if(paginationData && !Array.isArray(paginationData)  && isPagination ){
        setPaginationData({ ...paginationData , items: [ ...paginationData?.items , ...data?.items ]})
        setIsPagination(false)
    } else {
      setPaginationData(data)
    }
  }, [data])

  return (
    <div>
        <Header/>
        <ResultCount count={paginationData?.totalItems} />
        <div className={s.booksContainer}>
              { 
                isLoading 
                ?                
                  <Loader />                  
                :
                  <BooksListMap  booksData={paginationData.items} />
              }
        </div>
        
          <Button text='Load more'  onClick={getMoreBooks}/>
        
    </div>
  )
}
