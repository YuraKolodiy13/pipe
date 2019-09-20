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

  wp_enqueue_script( 'lightslider', get_template_directory_uri() . '/src/_lib/lightslider.min.js', array( 'jquery' ), null, true );
}

function myMenu(){
  register_nav_menu('topMenu', 'topMenu');
}


function create_post_types() {
    register_post_type( 'pipes', array(
            'labels'      => array(
                'name'          => __( 'Труби' ),
                'singular_name' => __( 'Труба' )
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
    register_taxonomy( 'pipes-categories', 'pipes', $casearr_studies );
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

add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
  wp_dequeue_style( 'wp-block-library' );
}

function wp_corenavi() {
  global $wp_query, $wp_rewrite;
  $pages = '';
  $max = $wp_query->max_num_pages;
  if (!$current = get_query_var('paged')) $current = 1;
  $a['base'] = str_replace(999999999, '%#%', get_pagenum_link(999999999));
  $a['total'] = $max;
  $a['current'] = $current;

  $total = 1; //1 - display the text "Page N of N", 0 - not display
  $a['mid_size'] = 2; //how many links to show on the left and right of the current
  $a['end_size'] = 1; //how many links to show in the beginning and end
  $a['prev_text'] = '&laquo; Previous'; //text of the "Previous page" link
  $a['next_text'] = 'Next &raquo;'; //text of the "Next page" link

  if ($max > 1) echo '<div class="navigation">';
  echo $pages . paginate_links($a);
  if ($max > 1) echo '</div>';
}

//Remove Google ReCaptcha code/badge everywhere apart from select pages
add_action('wp_print_scripts', function () {
  //Add pages you want to allow to array
  if ( !is_page( array( 'contacts','some-other-page-with-form' ) ) ){
    wp_dequeue_script( 'google-recaptcha' );
  }
});

add_action( 'wp_enqueue_scripts', 'sr_remove_cf7_scripts' );
function sr_remove_cf7_scripts() {
  if ( !is_page('contacts') ) {
    wp_deregister_style( 'contact-form-7' );
    wp_deregister_script( 'contact-form-7' );
  }
}

function custom_contact_validation_filter( $result, $tag ) {

  // 'contact': is name of tag in contact form

  if ( 'contact' == $tag->name ) {
    $re_format = '/^[0-9]{10}+$/';  //9425786311
    $your_contact = $_POST['contact'];

    if (!preg_match($re_format, $your_contact , $matches)) {
      $result->invalidate($tag, "Enter 10 digits only" );
    }

  }

  return $result;
}

add_filter( 'wpcf7_validate_text*', 'custom_contact_validation_filter', 10, 2 );

add_filter( 'wpcf7_validate_text', 'custom_contact_validation_filter', 10, 2 );