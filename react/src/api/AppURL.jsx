class AppURL {
     static BaseURL = "http://127.0.0.1:8000/api"
     static VisitorDetails = this.BaseURL+"/getvisitors"
     static PostContact = this.BaseURL+"/insert-contact"
     static AllSiteInfo = this.BaseURL+"/allsite-info"
     static AllCategoryDetails = this.BaseURL+"/allcategory"

    static ProductListByRemark(Remark){
          return this.BaseURL+"/product-listby-remark/"+Remark;
     }

     static ProductListByCategory(category){
          return this.BaseURL+"/product-listby-category/"+category;
     }

     static ProductListBySubCategory(category,subcategory){
          return this.BaseURL+"/product-listby-subcategory/"+category+"/"+subcategory;
     }

      static AllSlider = this.BaseURL+"/all-slider"
      
}

export default AppURL