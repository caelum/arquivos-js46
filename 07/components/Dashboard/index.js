import React from 'react'
import './dashboard.css'

export default function Dashboard(props) {
  return (
    <div className={`dashboard dashboard__${props.posicao}`}>
      {props.children}
    </div>    
  )
}
