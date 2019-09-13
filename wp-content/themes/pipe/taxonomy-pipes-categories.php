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
          <a href="/" class="breadcrumb__link">Home Page</a>
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
          <li class="active"><a href="/pipe/pipes">Всі</a></li>
          <?php if ( $terms && !is_wp_error( $terms ) ) :
            ?>
            <?php foreach ( $terms as $term ) { ?>
              <li><a href="<?php echo get_term_link($term->slug, $taxonomy); ?>"><?php echo $term->name; ?></a></li>
            <?php } ?>
          <?php endif;?>
        </ul>
      </div>
      <div class="categories categories--mob">
        <div class="categories__current">Всі</div>
        <ul>
          <li class="active"><a href="/pipe/pipes">Всі</a></li>
          <?php if ( $terms && !is_wp_error( $terms ) ) :
            ?>
            <?php foreach ( $terms as $term ) { ?>
            <li><a href="<?php echo get_term_link($term->slug, $taxonomy); ?>"><?php echo $term->name; ?></a></li>
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
                  <div class="blog__category"><?php the_category($post->ID)->name; ?></div>
                </div>
                <div class="blog__title"><?php the_title(); ?></div>
                <div class="learnMore__wrapper learnMore--green">
                  <a href="<?php the_permalink($post->ID); ?>" class="learnMore">
                    <span><svg><use xlink:href="#arrow" href="#arrow"></use></svg></span>
                  </a>
                </div>
              </div>
              <a href="<?php the_permalink($post->ID); ?>" class="blog__link"></a>
            </div>
          <?php endwhile; ?>

      </div>




        <div class="blogPagination">
          <?php
          the_posts_pagination( array(
            'prev_text'          => __( 'Previous page', 'twentyfifteen' ),
            'next_text'          => __( 'Next page', 'twentyfifteen' ),
            'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentyfifteen' ) . ' </span>',
          ) );
          ?>
        </div>
     <?php endif; ?>
      <?php wp_reset_postdata(); ?>

    </div>
    <a id="back2Top" class="btn" href="#">Go up</a>

    <div class="blogPage_bg-1" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-1.png')"></div>
    <div class="blogPage_bg-2" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-3.png')"></div>
  </div>



<?php get_footer(); ?>