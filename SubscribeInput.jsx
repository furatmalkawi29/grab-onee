import React from 'react'
import './SubscribeInput.scss'
import {HiOutlineMail} from 'react-icons/hi'

export default function SubscribeInput(props) {
  return (
    <form className="subscribe-input">
      <input type="text" placeholder={props.placeholder}/>
      <HiOutlineMail className="email-icon"/>
      <button type="button">Subscribe</button>
    </form>
  )
}
