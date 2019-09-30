<?php

function load_stylesheets(){
    wp_register_style('style', get_template_directory_uri() . '/css/style.css', array(), false, 'all');
    wp_enqueue_style('style');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

function load_fullpage(){
    wp_register_style('style', get_template_directory_uri() . '/css/fullpage.css', array(), false, 'all');
    wp_enqueue_style('style');
}
add_action('wp_enqueue_scripts', 'load_fullpage');


function load_jquery(){
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-3.4.1.min.js', '', 1, true);
    add_action('wp_enqueue_scripts', 'jquery');
}
add_action('wp_enqueue_scripts', 'load_jquery');


function loadjs(){
    wp_register_script('custom', get_template_directory_uri() . '/js/main.js', 'jquery', 1, true);
    wp_enqueue_script('custom');
}
add_action('wp_enqueue_scripts', 'loadjs');
