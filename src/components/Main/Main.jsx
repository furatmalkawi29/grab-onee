import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/HomePage'
export default function Main() {
  return (
    <React.Fragment>

        <Switch>
        <Route exact path="/" component={HomePage}/>
        </Switch>
    </React.Fragment>
  )
}
