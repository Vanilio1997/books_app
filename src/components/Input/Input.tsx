import React from 'react'
import {IInputProps} from './types'
import s from './Input.module.css'
import '../../styles/common.css'


const Input = ({onChange}:IInputProps) => {
  return (
    <>
      <input className={s.inp} onChange={(e) => onChange(e.target.value)}/>
    </>
  )
}

export default Input