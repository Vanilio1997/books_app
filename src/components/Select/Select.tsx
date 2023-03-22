import React from 'react'
import { ISelectProps } from './type'
import s from './Select.module.css'

const Select = ({selectData , onChange,label}: ISelectProps) => {
  return (
    <>
      <span className={s.label}>{label}</span>
      <select className={s.slct} onChange={(e) => onChange(e.target.value)} value={selectData[0]}>
          {
            selectData.map( data => (
              <option>{data}</option>
            ))
          }
      </select>   
    </>
  )
}

export default Select