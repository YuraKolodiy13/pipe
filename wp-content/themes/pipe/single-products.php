<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
    <div class="content">
        <div class="wrapper">
            <ul class="breadcrumbs">
                <li class="breadcrumb__item">
                    <a href="/" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="/products/" class="breadcrumb__link">Товари</a>
                </li>
                <li class="breadcrumb__item">
                    <a><?php the_title(); ?></a>
                </li>
            </ul>
            <h1><?php the_title(); ?></h1>
            <div class="content-here">
                <?php  the_content();  ?>
            </div>
        </div>
    </div>


<?php endwhile; ?>
<a id="back2Top" class="btn" href="#">Go up</a>

<?php get_footer(); ?>
