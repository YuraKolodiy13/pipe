<form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search" class="searchform">
  <div class="input-group custom-search-form">
    <input type="text" class="search-query form-control form-control-search search-field" name="s" id="s" placeholder="<?php esc_attr_e( 'Start typing...', 'underscoresme' ); ?>" />
    <span class="input-group-btn">
            <button aria-label="Search" class="btn-default btn-search header__search-icon" type="submit">
<!--                <i class="fas fa-search"></i>-->
            </button>
         </span>
  </div>
</form>