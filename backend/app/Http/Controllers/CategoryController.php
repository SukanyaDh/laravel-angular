<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json(['success' => $categories], 200);
    }

    public function list()
    {
        $categories = Category::select('category_id','name')->get();
        return response()->json(['success' => $categories], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CategoryRequest $request)
    {
        
        $request = $request->all();
        $category = Category::create($request);
        if($category)
        {
            return response()->json(['success' => 'Category added successfully'], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::where(['category_id'=>$id])->first();
        if($category)
        {
            return response()->json(['category' => $category], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::where(['category_id'=>$id])->first();
        if($category)
        {
            $requestData = $request->all();
            $update = Category::where(['category_id'=>$id])->update($requestData);
            //$category->update($requestData);
            return response()->json(['success' => 'Category updated successfully'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::where(['category_id'=>$id])->delete();
        if($category)
        {
            
            return response()->json(['success' => 'Category deleted successfully'], 200);
        }
    }
}
