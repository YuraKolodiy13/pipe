<?php
/**
 * Template name: Template Contact Us
 *
 */
get_header(); ?>
<div class="contactPage innerPage">
  <div class="banner section" style="background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(<?php the_field('contacts_img', 'options');?>) no-repeat center; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <h1><?php the_title(); ?></h1>
      </div>
    </div>
  </div>
  <div class="innerPage__wrapper">
    <div class="wrapper">
      <ul class="breadcrumbs">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Головна</a>
        </li>
        <li class="breadcrumb__item">
          <a><?php the_title(); ?></a>
        </li>
      </ul>
      <div class="contact">
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
  <a id="back2Top" class="btn" href="#">Вверх</a>
</div>


<?php get_footer(); ?>

<script>
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = 'https:/pipes/thank-you';
  }, false );
</script>