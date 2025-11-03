import React, { Component, Fragment } from 'react'
import FeaturedProduct from '../components/home/FeaturedProduct'
import { Categories } from './../components/home/Categories';
import { Collections } from './../components/home/Collections';
import { NewArrival } from './../components/home/NewArrival';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
         <FeaturedProduct />
         <NewArrival />
         <Collections />
         <Categories />
      </Fragment>
    )
  }
}

export default HomePage