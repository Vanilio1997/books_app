import React from 'react'
import s from './Header.module.css'
import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Buttton'
import { filterCategorySelectData, sortCategorySelectData } from '../../constants'
import { changeBookName, changeSortingCategory } from 'redux/slice/getRequestParamsSlice'
import { changeFilterCategory } from 'redux/slice/getFilterSlice'
import { useDispatch } from 'react-redux'


const Header = () => {
  function getValue(value:any){
    console.log(value);
  }
  const dispatch = useDispatch()

  function changeSearchInputValue(value:string){
    dispatch(changeBookName(value))
  }
  
  function changeFilterCategorie(value:string){
    dispatch(changeFilterCategory(value))
  }

  function changeSortCategory(value:string){
    dispatch(changeSortingCategory(value))
  }

  return (
    <header className={s.container}>
      <div className={s.wrapper}>
        <h1>Search for books</h1>
        <div>
          <Input onChange={changeSearchInputValue}/>
        </div>
        <div className={s.slctsContainer}>
          <Select label='Categories' selectData={filterCategorySelectData} onChange={changeFilterCategorie}/>
          <Select label='Sorting by' selectData={sortCategorySelectData} onChange={changeSortCategory}/>
        </div>
        <Button onClick={getValue} text={'Найти'} />
      </div>
    </header>
  )
}

export default Header