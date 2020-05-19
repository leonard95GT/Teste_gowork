<?php

namespace App\Http\Controllers;

use App\Office;
use Illuminate\Http\Request;

class OfficeController extends Controller
{

    public function index()
    {   
       $data = Office::all();

       return response()->json($data);
    }



    public function store(Request $request)
    {
        
    }


    public function show(Office $office)
    {
        
    }

    public function edit(Office $office)
    {
        //
    }


    public function update(Request $request, Office $office)
    {
        //
    }

    public function destroy(Office $office)
    {
        //
    }
}
