import React from 'react'
import BookCard from 'components/BookCard'
import { IItemsBooks } from 'types/IResponse'
import imgBook from '../../media/images/books.jpg'
import s from './BooksListMat.module.css'

export const BooksListMap = ({booksData}:any) => {
 
  
  return (
    <div className={s.wrapper}>
        {
          booksData?.length 
          ?
            booksData?.map((book:any)=>(
                <BookCard  
                title={book.volumeInfo.title} 
                authors={book.volumeInfo.authors} 
                id={book.id} 
                theme={book.volumeInfo.categories}
                picture={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : imgBook as string}
                key={book.id}
              />
            ))
          :
            <div> По данным критерия данных не найдено</div>
            
        }
    </div>
  )
}

