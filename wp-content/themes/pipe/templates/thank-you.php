<?php
/**
 * Template name: Template Thank You
 *
 */
get_header(); ?>
<div class="additionalPage innerPage">
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
      <div class="additional">
        <div class="additional__info">
          <h1><?php the_title(); ?></h1>
          <div class="additional__text"><?php the_field('thank_you_text'); ?></div>
          <div class="wrapper-btn">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"><rect id="btn" height="40" width="150" /><div id="btn-text">
                <a href="<?php the_field('thank_you_btn'); ?>" class="learn-more"><?php the_field('thank_you_btn_text'); ?></a>
              </div>
            </svg>
          </div>
        </div>
        <div class="additional__img">
          <img src="<?php the_field('thank_you_img'); ?>" alt="">
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>
