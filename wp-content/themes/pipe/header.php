<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <?php wp_head(); ?>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php wp_title()?></title>
  <meta name='description' content='<?php bloginfo('description'); ?>'>

  <link href="<?php echo get_template_directory_uri();?>/images/fav/favicon-16x16.png" type="image/x-icon" rel="shortcut icon">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri();?>/images/fav/favicon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri();?>/images/fav/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri();?>/images/fav/favicon-16x16.png">
  <link href="https://fonts.googleapis.com/css?family=Cuprum:400,700&display=swap&subset=cyrillic-ext" rel="stylesheet"  media="none" onload="if(media!='all')media='all'">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" media="none" onload="if(media!='all')media='all'">
</head>

<body <?php body_class(); ?>>

<header class="header">
  <div class="header__wrapper wrapper">
    <div class="header__logo">
      <a href="<?php echo get_home_url(); ?>">
        <?php $logo = get_field('header_logo', 'option'); ?>
        <img src="<?php echo $logo['url'];?>" alt="">
      </a>
    </div>
    <div class="header__nav--wrap">
      <nav class="header__nav header__nav--desktop">
        <?php wp_nav_menu(array(
          'theme_location' => 'topMenu',
          'container' => null,
          'menu_class' => 'topNav',
        )); ?>
      </nav>
      <div class="header__right">
        <div class="header__search">
          <div class="header__search--wrap">
            <?php get_search_form(); ?>
          </div>
          <div class="header__search-toggle header__search-icon"></div>
        </div>
        <div class="header__search--mob">
          <div class="header__search--wrap--mob">
            <?php get_search_form(); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="header__nav header__nav--tablet">
      <a href="/contact" class="contactBtnMob"><i class="fas fa-envelope"></i></a>
      <button class="header__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <?php wp_nav_menu(array(
        'theme_location' => 'topMenu',
        'container' => null,
        'menu_class' => 'topNav',
      )); ?>
    </div>
  </div>
</header>