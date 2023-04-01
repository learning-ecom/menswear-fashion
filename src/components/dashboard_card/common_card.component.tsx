import React from 'react'
import './dashboard_card.component.scss'
import {Children} from 'react'

const CommonCard = (props:any) => {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default CommonCard
