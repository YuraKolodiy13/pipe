<?php
/**
 * Template name: Template About Us
 *
 */
get_header(); ?>
<div class="aboutPage innerPage">
  <div class="banner section" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(<?php the_field('banner_img');?>) no-repeat center; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <h1><?php the_field('banner_title'); ?></h1>
      </div>
    </div>
  </div>
  <div class="innerPage__wrapper">
    <div class="wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a><?php the_title(); ?></a>
        </li>
      </ul>
    </div>
    <div class="content wrapper">
      <div class="content-here">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <p><?php the_content(); ?></p>
        <?endwhile; else: ?>
          <p>Sorry, no posts matched your criteria.</p>
        <?php endif; ?>
      </div>

    </div>
  </div>

</div>
<a id="back2Top" class="btn" href="#">Вверх</a>


<?php get_footer(); ?>

