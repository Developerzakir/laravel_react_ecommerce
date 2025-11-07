import React, { Component, Fragment } from 'react'
import FeaturedProduct from '../components/home/FeaturedProduct'
import { Categories } from './../components/home/Categories';
import { Collections } from './../components/home/Collections';
import { NewArrival } from './../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import { NavMenuDesktop } from './../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
         <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
         </div>

          <div className="Mobile">
              <NavMenuMobile />  
              <HomeTopMobile />
          </div>  

         <FeaturedProduct />
         <NewArrival />
         <Categories />
         <Collections />
      </Fragment>
    )
  }
}

export default HomePage