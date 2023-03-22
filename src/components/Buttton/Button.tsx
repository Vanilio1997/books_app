import React from 'react'
import s from './Button.module.css'
import { IButtonProps } from './types'

export const Button = ({onClick,text}:IButtonProps) => {
  return (
        <button className={s.btn} onClick={onClick}>{text}</button>
  )
}
