<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each one. For example, tag.php (Tag archives),
 * category.php (Category archives), author.php (Author archives), etc.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage BootBase
 */

get_header(); ?>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur culpa delectus eligendi eveniet fuga fugit repellat repellendus. Assumenda commodi et impedit natus officia quidem quisquam veritatis. Obcaecati, odio possimus!</p>

<div class="container">

    <div class="row">
        <div class="column col-lg-8">

            <?php if ( have_posts() ) : ?>
                <br>
                <h2><?php echo single_cat_title(); ?></h2>
                <hr class="line">

          <?php endif; ?>

        </div>

    </div>
</div>
<?php get_footer(); ?>
