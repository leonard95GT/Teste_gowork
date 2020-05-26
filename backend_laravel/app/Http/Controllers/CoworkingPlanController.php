<?php

namespace App\Http\Controllers;

use App\Coworking_plan;
use Illuminate\Http\Request;

class CoworkingPlanController extends Controller
{


    public function index()
    {
        $data = Coworking_plan::all();
        return response()->json($data);
    }



    public function store(Request $request)
    {
        $cp = new Coworking_plan;

        $cp->name = $request->name;
        $cp->value = $request->value;

        $cp->save();

        return 'cp created';
    }


    public function search(Request $request, $id)
    {
        $result = Coworking_plan::find($id);
        return $result;
    }


    public function update(Request $request, $id)
    {
        $cp = Coworking_plan::find($id);

        $cp->name = $request->name;
        $cp->value = $request->value;

        $cp->save();

        return $cp;
    }


    public function destroy(Request $request, $id)
    {
        $cp = Coworking_plan::find($request->id);
        $cp->delete();

        return 'deleted';

    }
}
