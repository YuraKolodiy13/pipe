<?php
/**
 * Created by PhpStorm.
 * User: yukolodiy
 * Date: 05.09.19
 * Time: 9:19
 */

add_action( 'after_setup_theme', 'myMenu' );

add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_styles(){
  wp_enqueue_style('main', get_template_directory_uri() . '/dist/main.css');

  wp_deregister_script( 'jquery' );
  wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', null, null, true);
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script('main', get_template_directory_uri() . '/dist/scripts.js', array( 'jquery' ), '', true);

//  wp_enqueue_script( 'slick', get_template_directory_uri() . '/src/_lib/slick.js', array( 'jquery' ), null, true );
//
}

function myMenu(){
  register_nav_menu('topMenu', 'topMenu');
}


function create_post_types() {
    register_post_type( 'products', array(
            'labels'      => array(
                'name'          => __( 'Товари' ),
                'singular_name' => __( 'Товар' )
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array( 'title', 'editor', 'revisions', 'thumbnail' )
        )
    );

    //custom taxonomy attached to CPT
    $case_studies   = 'Категорії товарів';
    $caselabels_studies = array(
        'name'                       => $case_studies,
        'singular_name'              => $case_studies,
        'search_items'               => 'Search ' . $case_studies,
        'popular_items'              => 'Popular ' . $case_studies,
        'all_items'                  => 'All ' . $case_studies . 's',
        'parent_item'                => 'Parent ' . $case_studies,
        'edit_item'                  => 'Edit ' . $case_studies,
        'update_item'                => 'Update ' . $case_studies,
        'add_new_item'               => 'Add New ' . $case_studies,
        'new_item_name'              => 'New ' . $case_studies,
        'separate_items_with_commas' => 'Separate ' . $case_studies . 's with commas',
        'add_or_remove_items'        => 'Add or remove ' . $case_studies . 's',
        'choose_from_most_used'      => 'Choose from most used ' . $case_studies . 's'
    );
    $casearr_studies    = array(
        'label'             => $case_studies,
        'labels'            => $caselabels_studies,
        'public'            => true,
        'hierarchical'      => true,
        'show_in_nav_menus' => true,
        'args'              => array( 'orderby' => 'term_order' ),
        'query_var'         => true,
        'show_ui'           => true,
        'rewrite'           => true,
        'show_admin_column' => true
    );
    register_taxonomy( 'products-categories', 'products', $casearr_studies );
}

add_action( 'init', 'create_post_types' );
add_theme_support('post-thumbnails');

add_theme_support('widgets');


if( function_exists('acf_add_options_page') ) {

  acf_add_options_page(array(
    'page_title' 	=> 'Загальне',
    'menu_title'	=> 'Загальне',
    'menu_slug' 	=> 'theme-general-settings',
    'capability'	=> 'edit_posts',
    'redirect'		=> false
  ));
}