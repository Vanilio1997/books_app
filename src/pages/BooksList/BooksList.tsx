import React,{useState, useEffect} from 'react'
import Header from 'components/Header'
import BookCard from 'components/BookCard'
import s from './BooksList.module.css'
import { useGetBooksQuery } from 'redux/slice/getBooksSlice'
import Loader from 'components/Loader'
import { UseTypedSelector } from 'hooks/UseTypedSelector'
import { IRequestParams } from 'types/IStore'
import { IGetBooksQueryInterface } from './types'
import { IResponseBooksInterface } from 'types/IResponse'
import { IItemsBooks } from 'types/IResponse'
import imgBook from '../../media/images/books.jpg'
import ResultCount from 'components/ResultCount'


export const BooksList = () => {
  const requestParams:IRequestParams = UseTypedSelector(store => store.requestParams)
  const filter = UseTypedSelector(store => store.filter.categories)
  const {data = [], isLoading}   = useGetBooksQuery(requestParams)
  const [filtredData, setFiltredData] = useState({})


  
  useEffect(() =>{
    console.log(1234);
    
    if(filter !== 'all'){
      const filtredItems = data?.items?.filter((book:IItemsBooks) => book.volumeInfo?.categories[0].toLowerCase().includes(filter))
      console.log(filtredItems);
      setFiltredData({...data , items: filtredItems})
    }
    setFiltredData(data)
  }, [filter])

  // console.log(filtredData);
  // console.log(filter , '------------------');
  
  return (
    <div>
        <Header/>
        <ResultCount count={data?.totalItems} />
        <div className={s.booksContainer}>
            <div className={s.wrapper}>
              { 
                isLoading 
                ?                
                  <Loader />                  
                :
                  data.items.map((book:IItemsBooks) => (
                    <BookCard  
                      title={book.volumeInfo.title} 
                      authors={book.volumeInfo.authors} 
                      id={book.id} 
                      theme={book.volumeInfo.categories}
                      picture={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : imgBook as string}
                      key={book.id}
                    />
                  ))
              }
            </div>
        </div>
    </div>
  )
}
