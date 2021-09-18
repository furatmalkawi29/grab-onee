import React from 'react'
import SubscribeInput from '../SubscribeInput/SubscribeInput'
import './SubscribeBanner.scss';

export default function SubscribeBanner(props) {
  
  return (
    <div className={`subscribe-banner ${props.componentClass} `}>
    <h1 className={props.headingClass}>
      {props.heading?props.heading:`
      Get the best deals delivered direct to your inbox each day`}</h1>
    <SubscribeInput placeholder="Enter email address"/>
  </div>
  )
}
