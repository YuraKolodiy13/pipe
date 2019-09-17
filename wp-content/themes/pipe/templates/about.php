<?php
/**
 * Template name: Template About Us
 *
 */
get_header(); ?>
<div class="aboutPage careerPage innerPage">
  <div class="banner section" style="background: linear-gradient(rgba(255,255,255,0.58), rgba(255,255,255,0.58)), url(<?php the_field('banner_img');?>) no-repeat center top; background-size: cover">
    <div class="wrapper">
      <div class="banner__content animateTranslate">
        <h1><?php the_title(); ?></h1>
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
    </div>
    <div class="mission">
      <div class="wrapper">
        <p class="subTitle"><?php the_field('mission_sub_title'); ?></p>
        <h2 id="title" class="title" contenteditable><?php the_field('mission_title'); ?></h2>
        <div class="mission__block">
          <h4 id="subTitle" contenteditable><?php the_field('mission_block_title'); ?></h4>
          <div><?php the_field('mission_block_text'); ?></div>
        </div>
        <div class="mission__block">
          <h4><?php the_field('mission_block_title2'); ?></h4>
          <ul>
            <?php if( have_rows('mission_block') ):
              while ( have_rows('mission_block') ) : the_row(); ?>
                <li class="text"><?php the_sub_field('mission_block_item'); ?></li>
              <?php
              endwhile;
            endif; ?>
          </ul>
        </div>
      </div>
    </div>
    <div class="benefits" style="background: url('<?php the_field('goals_bg'); ?>') center no-repeat; background-size: cover">
      <div class="wrapper__big">
        <div class="wrapper">
          <p class="subTitle"><?php the_field('goals_sub_title'); ?></p>
          <h2 class="title"><?php the_field('goals_title'); ?></h2>
          <div class="benefits__items">
            <?php
            if( have_rows('goals') ):
              while ( have_rows('goals') ) : the_row(); ?>
                <div class="benefits__item section animateTranslate">
                  <div class="benefits__img">
                    <img src="<?php the_sub_field('goals_img'); ?>" alt="">
                  </div>
                  <p><?php the_sub_field('goals_text'); ?></p>
                </div>
              <?php
              endwhile;
            endif; ?>
          </div>
        </div>
      </div>
    </div>

    <div class="facts section">
      <div class="wrapper">
        <p class="subTitle"><?php the_field('facts_sub_title'); ?></p>
        <h2 class="title"><?php the_field('facts_title'); ?></h2>
        <div class="facts__items">
          <?php
          if( have_rows('facts') ):
            while ( have_rows('facts') ) : the_row(); ?>
              <div class="facts__item">
                <div class="facts__img">
                  <img src="<?php the_sub_field('fact_img'); ?>" alt="">
                </div>
                <div class="facts__info">
                  <div class="facts__number"><?php the_sub_field('fact_number'); ?></div>
                  <div class="facts__name"><?php the_sub_field('fact_name'); ?></div>
                </div>
              </div>
            <?php
            endwhile;
          endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
<a id="back2Top" class="btn" href="#">Вверх</a>


<?php get_footer(); ?>

