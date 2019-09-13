<?php
/**
 * Template name: Template Homepage
 *
 */
?>

<?php get_header(); ?>

<div class="homepage">
  <div class="banner section" style="background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.1)), url(<?php the_field('banner_img');?>) no-repeat center top; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <p><?php the_field('banner_text'); ?></p>
      </div>
    </div>
  </div>
  <div class="benefits">
    <div class="wrapper">
      <h2 class="title"><?php the_field('benefits_title'); ?></h2>
      <div class="benefits__items">
        <?php
        if( have_rows('benefits') ):
          while ( have_rows('benefits') ) : the_row(); ?>
            <div class="benefits__item section animateTranslate">
              <?php $benefit_img = get_sub_field('benefit_img'); ?>
              <div class="benefits__img">
                <img src="<?php echo $benefit_img['url']; ?>" alt="">
              </div>
              <h5><?php the_sub_field('benefit_title'); ?></h5>
              <p><?php the_sub_field('benefit_text'); ?></p>
            </div>
          <?php
          endwhile;
        endif; ?>
      </div>
    </div>
  </div>
  <a id="back2Top" class="btn" href="#">Go up</a>
</div>


<?php get_footer(); ?>
