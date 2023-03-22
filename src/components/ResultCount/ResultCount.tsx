import React from 'react'
import {IResultCountProps} from './types'

export const ResultCount = ({count}:IResultCountProps) => {
  return (
    <div>Found {count} results</div>
  )
}
