
<?php
get_header(); ?>

<div class="casePage innerPage">
    <div class="innerPage__wrapper wrapper">
        <ul class="breadcrumbs">
            <li class="breadcrumb__item">
                <a href="/" class="breadcrumb__link">Home</a>
            </li>
            <li class="breadcrumb__item">
                <a><?php post_type_archive_title(); ?></a>
            </li>
        </ul>
        <div class="cases section">
            <div class="cases__items caseStudy__items">
                <?php   $args = array( 'post_type' => 'products', 'posts_per_page' => -1 );
                $my_posts = new WP_Query( $args );
                if ( $my_posts->have_posts() ) :?>
                    <?php while ( $my_posts->have_posts() ) : $my_posts->the_post(); ?>
                        <div class="cases__item">
                            <a href="<?php the_permalink($post->ID); ?>" class="cases__link"><?php the_title(); ?></a>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <div class="loadmore">view more cases</div>
        </div>
    </div>
    <a id="back2Top" class="btn" href="#">Go up</a>
</div>



<?php get_footer(); ?>

