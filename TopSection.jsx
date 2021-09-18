import React from 'react'
import './TopSection.scss'

export default function TopSection(props) {
  return (
    <div className="top-section">
      {props.children}
    </div>
  )
}
