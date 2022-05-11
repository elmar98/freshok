$(function(){
	
	$('.top-slider__inner').slick({
		prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prew"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-prev"></use><span class="sr-only"> Предыдущий слайд</span></svg></button>',
		nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-next"></use><span class="sr-only"> Следующий слайд</span></svg></button>',
		infinite: false
	});

$(function(){
	
	$('.brands__inner').slick({
	  arrows: false,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  responsive: [{
			breakpoint: 993,
			settings: {
			  slidesToShow: 4,
			}
		 },
		 {
			breakpoint: 769,
			settings: {
			  slidesToShow: 3,
			}
		 },
		 {
			breakpoint: 561,
			settings: {
			  slidesToShow: 2,
			}
		 },
	  ]
	});
 });

	$('.catalog__btn').on('click', function() {
		$(this).toggleClass('catalog__btn--active');
		$('.catalog__list').toggleClass('catalog__list--active');
	});

	$('.catalog__list').on('click', function() {
		$('.catalog__btn').removeClass('catalog__btn--active');
		$('.catalog__list').removeClass('catalog__list--active');
	});

	$('html').on('click', function(event){
		if (!$(event.target).closest('.catalog__btn').length) {
		  $('.catalog__btn').removeClass('catalog__btn--active');
		  $('.catalog__list').removeClass('catalog__list--active');
		}
	 });
	 

var containerEl1 = document.querySelector('[data-ref="top-products__container"]');
var containerEl2 = document.querySelector('[data-ref="promo-products__container"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);
});