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
          <h1><?php the_field('banner_title'); ?></h1>
          <p><?php the_field('banner_text'); ?></p>
        </div>
      </div>
    </div>
    <div class="innerPage__wrapper wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Home Page</a>
        </li>
        <li class="breadcrumb__item">
          <a><?php the_title(); ?></a>
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
        <div class="categories__current">All</div>
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
      <?php

      // If no content, include the "No posts found" template.
      else :


        ?>
        <h2><?php echo single_cat_title(); ?></h2>
        <hr class="line">

        <div class="noResults">
          <p class="noResults__text">Sorry, no news yet for this search term. Check back soon, or subscribe to our newsletter to receive important health law news.</p>
          <h2>RECENT HEALTH LAW NEWS
            <?php if(isset($_GET['att'])): print "- " . get_the_title($_GET['att']); elseif(isset($_GET['group'])): print "- " . get_the_title($_GET['group']); endif; ?></h2>
          <hr class="line">
          <?php
          // Start the Loop.
          $year = get_query_var( 'm' );
          wp_reset_query();
          if ( get_query_var( 'paged' ) ) {
            $paged = get_query_var( 'paged' );
          } elseif ( get_query_var( 'page' ) ) {
            $paged = get_query_var( 'page' );
          } else {
            $paged = 1;
          }
          if ( isset( $_GET['att'] ) ):
            $titleString = "\"" . $_GET['att'] . "\"";
            $args        = array(
              'post_type'      => 'rivkin-rounds',
              'posts_per_page' => - 1,
              'meta_query'     => array(
                array(
                  'key'     => 'attorneys',
                  'value'   => $titleString,
                  'compare' => 'LIKE'
                )
              )
            );
          elseif ( isset( $_GET['group'] ) ):
            $titleString = "\"" . $_GET['group'] . "\"";
            $args        = array(
              'post_type'  => 'rivkin-rounds',
              'meta_query' => array(
                array(
                  'key'     => 'practice_areas',
                  'value'   => $titleString,
                  'compare' => 'LIKE'
                )
              ),
            );
          else:
            $args = array( 'post_type' => 'rivkin-rounds', 'posts_per_page' => 10, 'paged' => $paged );
          endif;
          if ( ! empty( $year ) ):
            $args["year"] = $year;
          endif;
          $allauthors = '';
          $query = new WP_Query( $args );
          while ( $query->have_posts() ) : $query->the_post();
            $id      = get_the_ID();
            $authors = get_field( 'author' );
            $author  = '';
            foreach ( $authors as $item ) {
              if ( ! empty( $item ) ) {
                $author .= '<span> | </span>' . $item->post_title;
                $allauthors .= '<span>' .$item->post_title . '</span>';
              }
            }
            ?>

            <div class="pub">
              <a href="<?php the_permalink(); ?>"
                 class="post_title"><strong><?php the_title(); ?></strong></a><br/>
              <?php
              $hide_day = get_field( 'hide_day', $id );
              if ( $hide_day ):
                $date  = get_the_date( 'F j, Y', $id );
                $dyear = get_the_date( 'Y', $id );
              else:
                $date  = get_the_date( 'F j, Y', $id );
                $dyear = get_the_date( 'Y', $id );
              endif; ?>
              <span style="font-weight:bold;" class="custom_date"><?= $date ?>
                <?php // Get terms for post
                $terms = get_the_terms( $post->ID, 'health-services_topics' );
                // sort($terms);
                $rivkinAuthors = get_field( 'rivkin_rounds_staff' );
                if ( ! empty( $authors ) ):
                  foreach ( $authors as $item ) {
                    if ( ! empty( $item ) ) {
                      print '<span> | </span> <a class="publications_author publications_author-custom" target="_blank" href="' . get_permalink($item) . '">' . $item->post_title . '</a>';
                    }
                  }
                else:
                  foreach ( $rivkinAuthors as $item ) {
                    if ( ! empty( $item ) ) {
                      print '<span> | </span><a class="publications_author-custom">' . $item->post_title . '</a>';
                    }
                  } endif;
                //primary category
                //                                    $term_list = wp_get_post_terms($post->ID, 'health-services_topics', ['fields' => 'all']);
                //                                    foreach($term_list as $term) {
                //                                        if( get_post_meta($post->ID, '_yoast_wpseo_primary_health-services_topics',true) == $term->term_id ) {
                //                                            echo ' <span>|</span> <a class="publications_author" href="' . get_term_link($term) . '">' . $term->name . '</a>';
                //                                            $termMainRelated = $term->name;
                //                                        }
                //                                    }
                if ( $terms != null ) {
                  foreach ( $terms as $term ) {
//                                            if($termMainRelated !== $term->name){
                    // Print the name method from $term which is an OBJECT
                    print ' <span>|</span> <a class="publications_author" href="' . get_term_link($term) . '">' . $term->name . '</a>';
                    // Get rid of the other data stored in the object, since it's not needed
                    unset( $term );
//                                            }
                  }
                } ?></span><br/>
              <div class="block_content">
                <?php the_excerpt(); ?>
              </div>
            </div>
          <?php
          endwhile;
          ?>
        </div>

      <?php

      endif;
      ?>
      <div class="paginationWrap">
        <?php if (function_exists('wp_corenavi')) wp_corenavi(); ?>
      </div>

      <?php wp_reset_postdata(); ?>

    </div>
    <a id="back2Top" class="btn" href="#">Go up</a>

    <div class="blogPage_bg-1" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-1.png')"></div>
    <div class="blogPage_bg-2" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-3.png')"></div>
  </div>



<?php get_footer(); ?>