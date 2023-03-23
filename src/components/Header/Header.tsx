import React,{useState} from 'react'
import s from './Header.module.css'
import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Buttton'
import { filterCategorySelectData, sortCategorySelectData } from '../../constants'
import { changeBookName, changeSortingCategory,changeFilterCategory,resetStartIndex } from 'redux/slice/getRequestParamsSlice'
import { useDispatch } from 'react-redux'


const Header = () => {
  const [searchInput , setSearchInput] = useState('')
  const dispatch = useDispatch()

  function resetIndex(){
    dispatch(resetStartIndex())
  }

  function changeSearchInputValue(value:string){
    setSearchInput(value)
  }
  
  function changeFilterCategorie(value:string){
    resetIndex()
    if(value === 'all'){
      dispatch(changeFilterCategory(''))
    } else {
      dispatch(changeFilterCategory(value))
    }
  }

  function changeSortCategory(value:string){
    resetIndex()
    dispatch(changeSortingCategory(value))
  }

  function searchBooks(){
    resetIndex()
    dispatch(changeBookName(searchInput))
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
        <Button onClick={searchBooks} text={'Найти'} />
      </div>
    </header>
  )
}

export default Header