import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetBookQuery } from 'redux/slice/getBooksSlice'
import img from '../../media/images/books.jpg'
import Loader from 'components/Loader'
import s from './BookInfo.module.css'

export const BookInfo = () => {
  const {id} = useParams()
  const {data , isLoading} = useGetBookQuery(id as string)


   
  if(isLoading) return <Loader />

  return (
    <>
     {!isLoading && data? 
      <div className={s.wrapper}>
        <div className={s.imgWrapper}>
          <img className={s.img} src={data?.volumeInfo?.imageLinks ? data.volumeInfo.imageLinks.thumbnail : img} alt="No image"/>
        </div>
        <div className={s.textInfoContainer}>
          <div>
            {
                data.volumeInfo.categories && data?.volumeInfo?.categories.map( (category:string) => (
                <span className={s.category}>{category}</span>
              ))
            }
          </div>
          <h2>{data.volumeInfo.title}</h2>
          <div> {
              data.volumeInfo.authors && data.volumeInfo.authors.map( (author:string) => (
                <span className={s.author}>{author}</span>
              ))
            }</div>
          { data.volumeInfo.description && <div className={s.description}>{data.volumeInfo.description.replace(/(<([^>]+)>)/gi, '')}</div> }
        </div>
      </div>
     : <div>Error</div>
  }
  </>
  )
}
