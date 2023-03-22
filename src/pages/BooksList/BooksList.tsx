import React from 'react'
import Header from 'components/Header'
import BookCard from 'components/BookCard'
// import Header from '../../components/Header'
// import BookCard from '../../components/BookCard'
import s from './BooksList.module.css'
import image  from '../../media/images/books.jpg'



export const BooksList = () => {
  return (
    <div>
        <Header/>
        <div className={s.booksContainer}>
            <div className={s.wrapper}>
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
                <BookCard authors='Pushkin' id={1} theme='qwerty' title='Harry Potter' picture='https://media.filmz.ru/photos/full/filmz.ru_f_64332.jpg' />
            </div>
        </div>
    </div>
  )
}
