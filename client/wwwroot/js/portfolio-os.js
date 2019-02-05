( function () {
  // #region SHOWCASE

  const showcase = function () {
    $( '.showcase-nav ul li a' ).on( 'click', function ( e ) {
      e.preventDefault();

      const $this = $( this );
      const index = $this.closest( 'li' ).index();

      $this.closest( '.feature-showcase' ).find( '.showcase-nav ul li' ).removeClass( 'active' );
      $this.closest( 'li' ).addClass( 'active' );

      $this.closest( '.feature-showcase' ).find( '.images-list li' ).removeClass( 'active' );
      $this.closest( '.feature-showcase' ).find( '.images-list li' ).eq( index ).addClass( 'active' );


    } );
  };

  const contentWayPoint = function () {
    let i = 0;
    $( '.pro-animate' ).waypoint( function ( direction ) {

      if ( direction === 'down' && !$( this.element ).hasClass( 'pro-animated' ) ) {
        i++;

        $( this.element ).addClass( 'item-animate' );
        setTimeout( function () {

          $( 'body .pro-animate.item-animate' ).each( function ( k ) {
            const el = $( this );
            setTimeout( function () {
              const effect = el.data( 'animate-effect' );
              if ( effect === 'fadeIn' ) {
                el.addClass( 'fadeIn pro-animated' );
              } else if ( effect === 'fadeInLeft' ) {
                el.addClass( 'fadeInLeft pro-animated' );
              } else if ( effect === 'fadeInRight' ) {
                el.addClass( 'fadeInRight pro-animated' );
              } else {
                el.addClass( 'fadeInUp pro-animated' );
              }
              el.removeClass( 'item-animate' );
            }, k * 30, 'easeInOutExpo' );
          } );

        }, 100 );

      }

    }, { offset: '85%' } );
  };

  jQuery( function ( $ ) {
    showcase();
    contentWayPoint();
  } );

  // #endregion SHOWCASE
} )();
