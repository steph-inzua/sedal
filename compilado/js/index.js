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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbigpe1xyXG5cdCQoIFwiLmNhcnJ1c2VsXCIgKS5zbGljayh7XHJcblx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlTcGVlZDogMzAwMFxyXG5cdH0pO1xyXG5cdCQoIFwiLm1hcnF1ZXNpbmFcIiApLnNsaWNrKHtcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRzbGlkZXNUb1Nob3c6IDUsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogNVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vc2Nyb2xsIGRvd25cclxuJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdLCJmaWxlIjoiaW5kZXguanMifQ==
