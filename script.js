// when window is loaded
$(window).on('load', function (){
    $('.text-header').addClass('header-landing');
});

// when window being scrolled
$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    // services
    if (wScroll > $('.services').offset().top - 300 ) {

        $('.services .card-services').each(function (i) {
            setTimeout(function () {
                $('.services .card-services').eq(i).addClass('landing');
            }, 500 * (i+1) );
        });
        
    } else {
        $('.services .card-services').removeClass('landing');
    } 
    
    // thankful
    if (wScroll > $('.thankful').offset().top - 400 ) {
        $('.thankful').addClass('thankful-landing');
    } else {
        $('.thankful').removeClass('thankful-landing');
    }
});