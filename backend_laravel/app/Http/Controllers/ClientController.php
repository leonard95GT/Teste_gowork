<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{


    public function index()
    {
        $data = Client::all();
        return response()->json($data);    
    }


    public function store(Request $request)
    {
        $client = new Client;

        $client->typeUser = $request->typeUser;
        $client->name = $request->name;
        $client->federal_number = $request->federal_number;
        $client->office_id = $request->office_id;
        $client->coworking_plan_id = $request->coworking_plan_id;
        $client->active = $request->active;

        $client->save();

        return 'client created';
    }


    public function show(Request $request, $id)
    {
        $result = Client::find($id);
        return $result;

    }


    public function update(Request $request, $id)
    {
        $client = Client::find($id);

        $client->typeUser = $request->typeUser;
        $client->name = $request->name;
        $client->federal_number = $request->federal_number;
        $client->office_id = $request->office_id;
        $client->coworking_plan_id = $request->coworking_plan_id;
        $client->active = $request->active;

        $client->save();

        return $client;
    }


    public function destroy(Request $request, $id)
    {
        $result = Client::find($id);
        $result->delete();

        return 'deleted';

    }
}
