

import Button from 'components/Buttton'
import s from './BooksList.module.css'
import { useGetBooksQuery } from 'redux/slice/getBooksSlice'
import Loader from 'components/Loader'
import { UseTypedSelector } from 'hooks/UseTypedSelector'
import { IRequestParams } from 'types/IStore'
import ResultCount from 'components/ResultCount'
import BooksListMap from 'components/BooksListMap'
import { useDispatch } from 'react-redux'
import {  changeStartIndex } from 'redux/slice/getRequestParamsSlice'
import { useState , useEffect} from 'react'

export const BooksList = () => {
  const requestParams:IRequestParams = UseTypedSelector(store => store.requestParams)
  const {data , isLoading, isError} = useGetBooksQuery(requestParams)
  const [ paginationData, setPaginationData] = useState<any>(null)
  const [isPagination , setIsPagination] = useState(false)
  const dispatch = useDispatch()
  function getMoreBooks(){
    dispatch(changeStartIndex())
    setIsPagination(true)
  }

  useEffect(()=>{
    if(paginationData && !Array.isArray(paginationData)  && isPagination && data ){
        setPaginationData({ ...paginationData , items: [ ...paginationData?.items , ...data?.items ]})
        setIsPagination(false)
    } else {
      setPaginationData(data)
    }
  }, [data])



  return (
    <div>
      <ResultCount count={paginationData?.totalItems} />
      <div className={s.booksContainer}>
        { 
           paginationData?.totalItems !== 0 && !paginationData?.items?.length 
          ?                
            <Loader />                  
          :
            <BooksListMap  booksData={paginationData.items} />
          }
      </div>  
      <div className={s.btnContainer}>
        <Button text='Load more'  onClick={getMoreBooks}/>
      </div>
    </div>
  )
}
