<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<div class="content">
    <div class="wrapper">
        <ul class="breadcrumbs">
            <li class="breadcrumb__item">
                <a href="/" class="breadcrumb__link">Головна</a>
            </li>
            <li class="breadcrumb__item">
                <a href="/pipes/" class="breadcrumb__link">Труби</a>
            </li>
            <li class="breadcrumb__item">
                <a><?php the_title(); ?></a>
            </li>
        </ul>
        <h1><?php the_title(); ?></h1>
      <div class="content__firstBlock firstBlock">
        <div class="slider-block">
          <div class="firstBlock__description" id="lightSlider">
            <div class="content__img" data-thumb="<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>" style="background: url('<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>') center no-repeat; background-size: cover; width: 100%"></div>
            <div class="content__img" data-thumb="<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>" style="background: url('<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>') center no-repeat; background-size: cover; width: 100%"></div>
            <div class="content__img" data-thumb="<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>" style="background: url('<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>') center no-repeat; background-size: cover; width: 100%"></div>
          </div>
        </div>
        <div class="firstBlock__wrap">
          <div class="firstBlock__row">
            <div class="firstBlock__name">Додаткова інформація</div>
          </div>
          <div class="firstBlock__row">
            <div>MODEL: </div>
            <div>usa</div>
          </div>
          <div class="firstBlock__row">
            <div>MATERIAL: </div>
            <div>february</div>
          </div>
          <div class="firstBlock__row">
            <div>FINISH: </div>
            <div>8</div>
          </div>
          <div class="firstBlock__row">
            <div>STANDARDS: </div>
            <div>Technologies</div>
          </div>
        </div>
      </div>
        <div class="content-here">
          <h2>Опис</h2>
            <?php  the_content();  ?>
        </div>
    </div>

    <div class="related relatedCase innerPage section">
        <div class="wrapper">
            <h3>related case studies</h3>
            <div class="blog__items">
            <?php
            //get the taxonomy terms of custom post type
            $customTaxonomyTerms = wp_get_object_terms( $post->ID, 'pipes-categories', array('fields' => 'ids') );
            //query arguments
            $args = array(
                'post_type' => 'pipes',
                'post_status' => 'publish',
                'posts_per_page' => 4,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'pipes-categories',
                        'field' => 'id',
                        'terms' => $customTaxonomyTerms
                    )
                ),
                'post__not_in' => array ($post->ID),
            );
            //the query
            $relatedPosts = new WP_Query( $args );
            //loop through query
            if($relatedPosts->have_posts()){
                while($relatedPosts->have_posts()){
                    $relatedPosts->the_post();
                    ?>
                    <div class="blog__item">
                        <div class="blog__bg--wrap">
                            <div class="blog__bg animateScale" style="background: url(<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>) no-repeat center; background-size: cover"></div>
                        </div>
                        <div class="blog__info">
                          <div class="blog__top">
                            <div class="blog__category">
                              <?php
                              $terms = get_the_terms( $post->ID, 'pipes-categories');
                              if ( $terms != null ) {
                                foreach ($terms as $term) {
                                  print  '<span>' . $term->name . '</span>';
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
                    <?php
                }
            }else{
                //no posts found
            }

            //restore original post data
            wp_reset_postdata();

            ?>
            </div>
        </div>
    </div>
</div>


<?php endwhile; ?>

<a id="back2Top" class="btn" href="#">Вверх</a>

<?php get_footer(); ?>

<script type="text/javascript">
  $(document).ready(function() {
    $("#lightSlider").lightSlider({
      gallery: true,
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 5,
      controls: true

    });
  });
</script>
