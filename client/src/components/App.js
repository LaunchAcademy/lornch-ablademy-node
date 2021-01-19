import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import ClinicShow from "./ClinicShow"

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/clinics/:id" component={ClinicShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
