$( document ).ready( function(){
	$( ".carrusel" ).slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	$( ".marquesina" ).slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});
});

//scroll down
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});