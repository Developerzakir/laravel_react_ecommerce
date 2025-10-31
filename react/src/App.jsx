import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import { Routes, Route } from 'react-router-dom'
import AppRoute from './route/AppRoute';

export class App extends Component {
  render() {
    return (
     <Fragment>
           <AppRoute />
     </Fragment>
    )
  }
}

export default App