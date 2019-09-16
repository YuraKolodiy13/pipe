<?php
if ( $terms != null ) {
  foreach ( $terms as $term ) {
    print ' <span>|</span> <a class="publications_author" href="' . get_term_link($term) . '">' . $term->name . '</a>';
    unset( $term );
  }
}
  ?>