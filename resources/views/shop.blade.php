@extends('layouts.master')

@section('content')

<x-header/>

<p class="browse-txt">Browse Products</p>
<div class="shop">
    <x-sidebar/>
    <x-product-container/>
</div>


@endsection