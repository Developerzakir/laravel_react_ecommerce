<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteInfo;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function allSiteInfo()
    {
        $result = SiteInfo::get();
        return $result;
    }
}
