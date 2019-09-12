<?php
/**
 * Template name: Template Homepage
 *
 */
?>

<?php get_header(); ?>

<div class="homepage">
  <div class="banner section" style="background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(<?php the_field('banner_img');?>) no-repeat center top; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <p><?php the_field('banner_text'); ?></p>
      </div>
    </div>
  </div>
  <a id="back2Top" class="btn" href="#">Go up</a>
</div>


<?php get_footer(); ?>
