<footer class="footer">
  <div class="wrapper">
    <div class="footer__top">
      <div class="footer__items">
        <div class="footer__info">
          <a href="<?php echo get_home_url(); ?>">
            <?php $logo = get_field('footer_logo', 'option'); ?>
            <img src="<?php echo $logo['url'];?>" alt="">
          </a>
          <p><?php the_field('footer_text', 'option'); ?></p>
        </div>
        <div class="footer__general">
          <div class="footer__social footer__social--mob">
            <div class="footer__title"><span><?php the_field('footer_social_title', 'option'); ?></span></div>
            <ul>
              <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
              <li class="social__linkedin"><a href=""><i class="fab fa-linkedin-in"></i></a></li>
              <li class="social__twitter"><a href=""><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
          <div class="footer__offices">
            <div class="footer__title"><span><?php the_field('footer_offices_title', 'option'); ?></span></div>
            <ul>
              <?php
              if( have_rows('footer_offices', 'option') ):
                while ( have_rows('footer_offices', 'option') ) : the_row();
                  ?>
                  <li>
                    <a href="http://maps.google.com/?q=<?php the_sub_field('footer_office', 'option'); ?>" target="_blank"><?php the_sub_field('footer_office', 'option'); ?></a>
                  </li>
                <?php
                endwhile;
              else :
              endif;
              ?>
              <?php if ( get_field( 'footer_offices_planning', 'option' ) ) { ?>
                <li><a><?php the_field( 'footer_offices_planning', 'option' );?></a></li>
              <?php } ?>
            </ul>
          </div>
          <div class="footer__hours">
            <div class="footer__title"><span><?php the_field('footer_hours_title', 'option'); ?></span></div>
            <p><?php the_field('footer_hours', 'option'); ?></p>
          </div>
        </div>
        <div class="footer__contacts">
          <div class="footer__title"><span><?php the_field('footer_contact_title', 'option'); ?></span></div>
          <ul>
            <?php
            if( have_rows('footer_contact', 'option') ):
              while ( have_rows('footer_contact', 'option') ) : the_row();
                ?>
                <li>
                  <i class="fas fa-phone"></i>
                  <?php the_sub_field('footer_country', 'option'); ?>
                  <a href="tel:<?php the_sub_field('footer_phone', 'option'); ?>"> <?php the_sub_field('footer_phone', 'option'); ?></a>
                </li>
              <?php
              endwhile;
            else :
            endif;
            ?>
          </ul>
          <ul>
            <?php
            if( have_rows('footer_contact_email', 'option') ):
              while ( have_rows('footer_contact_email', 'option') ) : the_row();
                ?>
                <li>
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:<?php the_sub_field('footer_email', 'option'); ?>"><?php the_sub_field('footer_email', 'option'); ?></a>
                </li>
              <?php
              endwhile;
            else :
            endif;
            ?>
          </ul>
        </div>
        <div class="footer__social footer__social--desktop">
          <div class="footer__title"><span><?php the_field('footer_social_title', 'option'); ?></span></div>
          <ul>
            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
            <li class="social__linkedin"><a href=""><i class="fab fa-linkedin-in"></i></a></li>
            <li class="social__twitter"><a href=""><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="footer__rights">
        <p>Copyright © <?php echo date("Y"); ?> yourCompany.  All rights reserved. </p>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<!--learn more arrow-->
<!--<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">-->
<!--  <defs>-->
<!--    <symbol id="arrow" viewBox="0 0 100 100">-->
<!--      <path d="M12.5 45.83h64.58v8.33H12.5z"/>-->
<!--      <path d="M59.17 77.92l-5.84-5.84L75.43 50l-22.1-22.08 5.84-5.84L87.07 50z"/>-->
<!--    </symbol>-->
<!--  </defs>-->
<!--</svg>-->
</body>
</html>