<?php
/**
 * Template name: Template Homepage
 *
 */
?>

<?php get_header(); ?>

<div class="homepage">
  <div class="banner section">
    <div class="wrapper">
      <div class="banner__video">
        <video autoplay loop muted="" data-wf-ignore="true">
          <?php $file = get_field('banner_video'); ?>
          <source src="<?php echo $file['url']; ?>" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' data-wf-ignore="true">
        </video>
      </div>
      <div class="banner__content animateTranslate">
        <h1><?php the_field('banner_title'); ?></h1>
        <p><?php the_field('banner_text'); ?></p>
        <a class="banner__link btn" href="<?php the_field('banner_link'); ?>"><?php the_field('banner_link_text'); ?></a>
      </div>
    </div>
  </div>
  <div class="pipes-categories section">
    <?php
    $taxonomy = 'pipes-categories';
    $terms = get_terms($taxonomy); // Get all terms of a taxonomy
    ?>
    <div class="wrapper">
      <h2 class="title animateTranslate">Каталог труб</h2>
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
  <div class="company section">
    <div class="company__wrapper lazy" data-background="linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('<?php the_field( 'company_img' ); ?>') no-repeat right center">
      <div class="wrapper animateTranslate">
        <h3 class="title"><?php the_field( 'company_title' ); ?></h3>
        <p class="text"><?php the_field( 'company_text' ); ?></p>
        <div class="wrapper-btn">
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"><rect id="btn" height="40" width="150" /><div id="btn-text">
              <a href="<?php the_field( 'company_link' ); ?>" class="learn-more"><?php the_field( 'company_link_text' ); ?></a>
            </div>
          </svg>
        </div>
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

  <div class="map">
    <?php the_field('map'); ?>
  </div>
  <a id="back2Top" class="btn" href="#">Вверх</a>
</div>


<?php get_footer(); ?>
