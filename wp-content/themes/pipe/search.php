<?php get_header('inner'); ?>
  <div class="additionalPage innerPage">
    <div class="innerPage__wrapper wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a>Search</a>
        </li>
      </ul>
      <div class="content">
        <div class="content-here">
          <h1 class="page-title">Search Results for:</h1>
          <form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search" class="searchform">
            <div class="input-group custom-search-form">
              <input type="text" class="search-query form-control form-control-search search-field" name="s" id="s" placeholder="<?php esc_attr_e( 'Start typing...', 'underscoresme' ); ?>"  value="<?php echo get_search_query();?>"/>
              <span class="input-group-btn">
                            <button aria-label="Search" class="btn-default btn-search header__search-icon" type="submit"></button>
                         </span>
            </div>
          </form>
          <div class="found">Found <?php echo $wp_query->found_posts; ?> results:</div>
          <?php if ( have_posts() ) : ?>
            <?php
            global $wp_query;
            query_posts(
              wp_parse_args(
                $wp_query->query
                ,array( 'posts_per_page' => 10, 'orderby' => 'date', 'order'   => 'DESC')
              )
            );
            ?>
            <?php while ( have_posts() ) : the_post(); ?>
              <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <?php
                $postName = get_post_type_object(get_post_type())->labels->singular_name;
                if($postName == 'Post'){
                  $postName = 'Blog Post';
                }
                ;?>
                <span class="post__name"><?php echo $postName;?></span>
                <header class="entry-header">
                  <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
                </header><!-- .entry-header -->

                <div class="entry-summary">
                  <?php the_excerpt(); ?>
                </div><!-- .entry-summary -->
              </article><!-- #post-## -->

            <?php endwhile; ?>

            <div class="paginationWrap">
              <?php if (function_exists('wp_corenavi')) wp_corenavi(); ?>
            </div>

          <?php else : ?>

            <section class="no-results not-found">
              <header class="page-header">
                <h2 class="nothing-found"><?php _e( 'Nothing Found', '_s' ); ?></h2>
              </header><!-- .page-header -->

              <div class="page-content">
                <?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
                  <p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', '_s' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
                <?php elseif ( is_search() ) : ?>
                  <p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', '_s' ); ?></p>
                  <?php //get_search_form(); ?>
                <?php else : ?>
                  <p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '_s' ); ?></p>
                  <?php// get_search_form(); ?>
                <?php endif; ?>
              </div><!-- .page-content -->
            </section><!-- .no-results -->
          <?php endif; ?>
        </div>
      </div><!-- #main -->
    </div>
    <div class="blogPage_bg-1" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-1.png')"></div>
    <div class="blogPage_bg-2" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-2.png')"></div>
  </div>


<?php get_footer(); ?>