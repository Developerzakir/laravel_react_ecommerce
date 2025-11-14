import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';

export class AppRoute extends Component {
  render() {
    return (
     <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route  path="/productdetails" element={<ProductDetailsPage />} />
          <Route  path="/notification" element={<NotificationPage />} />
          <Route  path="/favourite" element={<FavouritePage />} />
          <Route  path="/cart" element={<CartPage />} />
          <Route  path="/about" element={<AboutPage />} />
          <Route  path="/productcategory/:category" element={<ProductCategoryPage />} />
          <Route  path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage />} />
        </Routes>
     </Fragment>
    )
  }
}

export default AppRoute