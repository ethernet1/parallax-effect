$(document).ready(function() {
    $(window).scroll(function(event) {
        let scr = $(this).scrollTop();
        let h = $('.content').outerWidth();
        let w = $(this).outerWidth();
        let h_b = $('.parallax').outerHeight();
        let p = scr/h * 100;
        
        let p_b = scr/h_b * 100;
        let z_1 = 1 + (w/1000 * p_b);
        let o = 1 - 1/100 * p_b;
        $('.paralax_fog').css('opacity', o);
        $('.paralax_fog').css('transform', 'scale('+z_1+')');
        let z_2 = 1 + (w/500000 * p);
        let hr = w/2000 * p_b;
        let z_3 = 1 * (w*0.000006 * p_b);
        $('.paralax_montain_1').css('transform', 'scale('+z_2+')');
        $('.paralax_montain_2').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_2+')');
        $('.paralax_montain_3').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_2+')');
    });
});