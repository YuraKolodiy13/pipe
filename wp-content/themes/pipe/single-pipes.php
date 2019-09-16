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
        <div class="content__img" style="background: url('<?php echo get_the_post_thumbnail_url( $post->ID, 'full' );?>') center no-repeat; background-size: cover"></div>
        <div class="content-here">
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
                            <div class="blog__title"><?php the_title(); ?></div>
                            <div class="blog__bottom">
                                <div class="blog__logo">
                                    <img src="<?php the_field('case_logo');?>" alt="">
                                    <p><?php the_field('case_name');?></p>
                                </div>
                                <div class="learnMore__wrapper learnMore--green">
                                    <a href="<?php the_permalink($post->ID); ?>" class="learnMore">
                                        <span><svg><use xlink:href="#arrow" href="#arrow"></use></svg></span>
                                    </a>
                                </div>
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

<a id="back2Top" class="btn" href="#">Go up</a>

<?php get_footer(); ?>
