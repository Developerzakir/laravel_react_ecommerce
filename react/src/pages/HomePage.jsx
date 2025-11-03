import React, { Component, Fragment } from 'react'
import FeaturedProduct from '../components/home/FeaturedProduct'
import { Categories } from './../components/home/Categories';
import { Collections } from './../components/home/Collections';
import { NewArrival } from './../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import { NavMenuDesktop } from './../components/common/NavMenuDesktop';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
         <NavMenuDesktop />
         <HomeTop />
         <FeaturedProduct />
         <NewArrival />
          <Categories />
          <Collections />
      </Fragment>
    )
  }
}

export default HomePage