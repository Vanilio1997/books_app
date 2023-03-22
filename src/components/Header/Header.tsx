import React from 'react'
import s from './Header.module.css'
import Input from '../Input'
import Select from '../Select'
import { filterCategorySelectData } from '../../constants'
import { sortCategorySelectData } from '../../constants'
import Button from 'components/Buttton'


const Header = () => {
  function getValue(value:any){
    console.log(value);
  }

  console.log(process.env);
  

  return (
    <header className={s.container}>
      <div className={s.wrapper}>
        <h1>Search for books</h1>
        <div>
          <Input onChange={getValue}/>
        </div>
        <div className={s.slctsContainer}>
          <Select label='Categories' selectData={filterCategorySelectData} onChange={getValue}/>
          <Select label='Sorting by' selectData={sortCategorySelectData} onChange={getValue}/>
        </div>
        <Button onClick={getValue} text={'Найти'} />
      </div>
    </header>
  )
}

export default Header