import React from 'react'
import { IBookCard } from './types'
import s from './BookCard.module.css'

export const BookCard = ({title, authors , theme, picture, id}:IBookCard) => {
    
  return (
    <div className={s.container}>
        <div>
            <img src={picture} className={s.bookImg} alt=""/>
        </div>
        <div className={s.textContainer}>
            <span className={s.theme}>{theme}</span>
            <div className={s.title}><strong>{title}</strong></div>
            <span className={s.authors}>{authors}</span>
        </div>
    </div>
  )
}





