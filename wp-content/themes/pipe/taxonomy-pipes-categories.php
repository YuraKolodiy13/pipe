<?php
/**
 * Template name: Template Products
 *
 */
get_header(); ?>

  <div class="blogPage innerPage">
    <div class="banner section" style="background: linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(0,0,0,0.6)), url(<?php the_field('pipes_img', 'options');?>) no-repeat center; background-size: cover">
      <div class="wrapper">
        <div class="banner__content animateTranslate">
          <h1>Каталог труб</h1>
        </div>
      </div>
    </div>
    <div class="innerPage__wrapper wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Головна</a>
        </li>
        <li class="breadcrumb__item">
          <a>Каталог труб</a>
        </li>
      </ul>

      <div class="categories">
        <?php

        $taxonomy = 'pipes-categories';
        $terms = get_terms($taxonomy); // Get all terms of a taxonomy

        ?>
        <ul>
          <li><a href="/pipe/pipes">Всі</a></li>
          <?php if ( $terms && !is_wp_error( $terms ) ) :
            ?>
            <?php foreach ( $terms as $term ) {
              if($term->name === single_cat_title( '', false )){
                  echo '<li class="active"><a href="' . get_category_link($term->term_id) . '">' . $term->name . '</a></li>';
                }else{
                  echo '<li><a href="' . get_category_link($term->term_id) . '">' . $term->name . '</a></li>';
                } ?>
            <?php } ?>
          <?php endif;?>
        </ul>
      </div>
      <div class="categories categories--mob">
        <div class="categories__current">Всі</div>
        <ul>
          <li><a href="/pipe/pipes">Всі</a></li>
          <?php if ( $terms && !is_wp_error( $terms ) ) :
            ?>
            <?php foreach ( $terms as $term ) {
            if($term->name === single_cat_title( '', false )){
              echo '<li class="active"><a href="' . get_category_link($term->term_id) . '">' . $term->name . '</a></li>';
            }else{
              echo '<li><a href="' . get_category_link($term->term_id) . '">' . $term->name . '</a></li>';
            } ?>
          <?php } ?>
          <?php endif;?>
        </ul>
      </div>

      <div class="blog__items section">
        <?php if ( have_posts() ) : ?>
          <?php while ( have_posts() ) : the_post(); ?>
            <div class="blog__item ">
              <div class="blog__bg--wrap">
                <div class="blog__bg lazy animateScale" data-background="url(<?php echo get_the_post_thumbnail_url( );?>) no-repeat center"></div>
              </div>
              <div class="blog__info">
                <div class="blog__top">
                  <div class="blog__category">
                  <?php
                  $terms = get_the_terms( $post->ID, 'pipes-categories');
                    if ( $terms != null ) {
                      foreach ($terms as $term) {
                        print '<span>' . $term->name . '</span>';
                        unset($term);
                      }
                    }
                    ?>
                      </div>
                </div>
                <div class="blog__title"><?php the_title(); ?></div>
                <div class="blog__price">
                  <span>Ціна:</span>
                  <span><?php the_field('price');?></span>
                </div>
                <div class="wrapper-btn">
                  <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"><rect id="btn" height="40" width="150" /><div id="btn-text">
                      <a href="<?php the_permalink($post->ID); ?>" class="learn-more">Детальніше</a>
                    </div>
                  </svg>
                </div>
              </div>
              <a href="<?php the_permalink($post->ID); ?>" class="blog__link"></a>
            </div>
          <?php endwhile; ?>

      </div>




      <div class="paginationWrap">
        <?php if (function_exists('wp_corenavi')) wp_corenavi(); ?>
      </div>
     <?php endif; ?>
      <?php wp_reset_postdata(); ?>

    </div>
    <a id="back2Top" class="btn" href="#">Вверх</a>
  </div>



<?php get_footer(); ?>