<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    public function productListByRemark(Request $request)
    {
        $remark = $request->remark;
        $productList = ProductList::where('remark',$remark)->limit(4)->get();
        return $productList;
    }

    public function productListByCategory(Request $request)
    {
        $category = $request->category;
        $productList = ProductList::where('category',$category)->get();
        return $productList;
    }

    public function productListBySubCategory(Request $request)
    {
        $category = $request->category;
        $subcategory = $request->subcategory;
        $productList = ProductList::where('category',$category)->where('subcategory',$subcategory)->get();
        return $productList;
    }
}
