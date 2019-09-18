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
      <h2 class="title section animateTranslate"><?php the_field('benefits_title'); ?></h2>
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
  <div class="pipes-categories section">
    <?php
    $taxonomy = 'pipes-categories';
    $terms = get_terms($taxonomy); // Get all terms of a taxonomy
    ?>
    <div class="wrapper">
      <h2 class="title animateTranslate">Каталог товарів</h2>
      <div class="pipes-categories__items">
        <?php if ( $terms && !is_wp_error( $terms ) ) :
          ?>
          <?php foreach ( $terms as $term ) { ?>
          <div class="pipes-categories__item animateTranslate">
            <span style="background: url(<?php the_field('image', $term);?>) no-repeat center; background-size: cover"></span>
            <a href="<?php echo get_term_link($term->slug, $taxonomy); ?>"></a>
            <p><?php echo $term->name; ?></p>
          </div>
        <?php } ?>
        <?php endif;?>
      </div>
    </div>
  </div>
  <div class="map">
    <?php the_field('map'); ?>
  </div>
  <a id="back2Top" class="btn" href="#">Вверх</a>
</div>


<?php get_footer(); ?>
