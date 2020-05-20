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
        $office = new Office;

        $office->address = $request->address;
        $office->state = $request->state;
        $office->number_position = $request->number_position;
        $office->neighborhood = $request->neighborhood;

        $office->save();

        return 'office created';
    }


    public function search(Office $office, Request $request)
    {
        $result = Office::find($request->id);
        return $result;



    public function update(Request $request, Office $office)
    {

        $result = Office::find($request->id);

        $result->address = $request->address;
        $result->state = $request->state;
        $result->number_position = $request->number_position;
        $result->neighborhood = $request->neighborhood;

        $result->save();

        return $result;

    }

    public function destroy(Request $request)
    {
        $result = Office::find($request->id);
        $result->delete();

        return $result;

    }
}
