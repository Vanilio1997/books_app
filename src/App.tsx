import React from 'react';
import './App.css';
import { BooksList } from 'pages/BooksList/BooksList';
import Header from 'components/Header';
import {Routes, Route, Link } from 'react-router-dom'
import Error from 'pages/ErrorPage';
import { BookInfo } from 'pages/BookInfo/BookInfo';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<BooksList />}/>
        <Route path='/book/:id' element={<BookInfo/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
