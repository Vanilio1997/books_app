import React from 'react'
import { IBookCard } from './types'
import s from './BookCard.module.css'
import {NavLink} from 'react-router-dom'

export const BookCard = ({title, authors , theme, picture, id}:IBookCard) => {
    
  return (
    <NavLink to={`/book/${id}`}>
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
    </NavLink>
  )
}





