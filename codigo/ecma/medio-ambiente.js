$( document ).ready( function(){

	$( ".marquesina" ).slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [
			{
			      breakpoint: 760,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			},
		]
	});
});
