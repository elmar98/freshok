$(function(){
	
	$('.slider').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	})

	$('.catalog__menu').on('click', function() {
		$(this).toggleClass('catalog__menu--active');
		$('.catalog__list').toggleClass('catalog__list--active');
	});

	$('.catalog__list').on('click', function() {
		$('.catalog__menu').removeClass('catalog__menu--active');
		$('.catalog__list').removeClass('catalog__list--active');
	});

	$('html').on('click', function(event){
		if (!$(event.target).closest('.catalog__menu').length) {
		  $('.catalog__menu').removeClass('catalog__menu--active');
		  $('.catalog__list').removeClass('catalog__list--active');
		}
	 });

	 var mixer = mixitup('.product__cards');
});