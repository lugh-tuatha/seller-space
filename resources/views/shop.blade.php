@extends('layouts.master')

@section('content')

<x-header/>

<p class="browse-txt">Browse Products</p>
<div class="shop">
    <x-sidebar/>

    <div class="item-container">
        <p class="head">Mobile Legends</p>
        <div class="item">
            <x-product-container/>
            <x-post-item/>
        </div>

    </div>
</div>


@endsection