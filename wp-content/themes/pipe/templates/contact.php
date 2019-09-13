<?php
/**
 * Template name: Template Contact Us
 *
 */
get_header(); ?>
<div class="contactPage innerPage">
  <div class="banner section" style="background: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(0,0,0,0.5)), url(<?php the_field('contacts_img', 'options');?>) no-repeat center; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <h1><?php the_field('banner_title'); ?></h1>
        <p><?php the_field('banner_text'); ?></p>
      </div>
    </div>
  </div>
  <div class="innerPage__wrapper">
    <div class="wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a><?php the_title(); ?></a>
        </li>
      </ul>
      <div class="contact">
        <h1 class="contact__mainTitle"><?php the_title(); ?></h1>
        <div class="contact__wrapper">
          <div class="contact__info">
            <div class="contact__block">
              <h3><?php the_field('form_address_title'); ?></h3>
              <a href="http://maps.google.com/?q=<?php the_field('form_address'); ?>" target="_blank"><?php the_field('form_address'); ?></a>
              <div class="contact__map"><?php the_field('form_iframe'); ?></div>
            </div>
            <div class="contact__block">
              <h3><?php the_field('form_email_title'); ?></h3>
              <?php
              if( have_rows('form_email') ):
                while ( have_rows('form_email') ) : the_row(); ?>
                  <p><a href="mailto:<?php the_sub_field('form_email_item'); ?>"><?php the_sub_field('form_email_item'); ?></a></p>
                <?php endwhile;
              endif; ?>
            </div>
            <div class="contact__block">
              <h3><?php the_field('form_phone_title'); ?></h3>
              <?php
              if( have_rows('form_phone') ):
                while ( have_rows('form_phone') ) : the_row(); ?>
                  <p><?php the_sub_field('form_phone_country'); ?> <a href="tel:<?php the_sub_field('form_phone_item'); ?>"> <?php the_sub_field('form_phone_item'); ?></a></p>
                <?php endwhile;
              endif; ?>
            </div>
          </div>
          <div class="contact__form">
            <?php echo do_shortcode('[contact-form-7 id="82" title="Contact form"]');?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="blogPage_bg-2" style="background: url('<?php echo get_template_directory_uri(); ?>/images/decor-2.png')"></div>
</div>


<?php get_footer(); ?>

<script>
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = 'https://staging-echoua.kinsta.com/thank-you';
  }, false );
</script>