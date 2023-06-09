import React from 'react'
import { ISelectProps } from './type'
import s from './Select.module.css'

const Select = ({selectData , onChange,label}: ISelectProps) => {
   
  return (
    <>
      <div className={s.label}>{label}</div>
      <select className={s.slct} onChange={(e) => onChange(e.target.value)} defaultValue={selectData[0]}>
          {
            selectData.map( (data,index) => (
              <option key={index}>{data}</option>
            ))
          }
      </select>   
    </>
  )
}

export default Select