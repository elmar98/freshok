$(function () {

	$('.top-slider__inner').slick({
		infinite: false,
		prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prew"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-prev"></use><span class="sr-only"> Предыдущий слайд</span></svg></button>',
		nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-next"></use><span class="sr-only"> Следующий слайд</span></svg></button>',

		responsive: [{
				breakpoint: 1230,
				settings: {
					autoplay: true,
					arrows: false,
					autoplaySpeed: 3000,
				}
			},

			{
				breakpoint: 561,
				settings: {
					autoplay: false,
					arrows: false,
					dots: true,
				}
			},
		]
	});

	$(function () {

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

	//======первый Каталог=========

	$('.catalog__btn').on('click', function () {
		$(this).toggleClass('catalog__btn--active');
		$('.catalog__list').toggleClass('catalog__list--active');
	});

	$('.catalog__list').on('click', function () {
		$('.catalog__btn').removeClass('catalog__btn--active');
		$('.catalog__list').removeClass('catalog__list--active');
	});

	$('html').on('click', function (event) {
		if (!$(event.target).closest('.catalog__btn').length) {
			$('.catalog__btn').removeClass('catalog__btn--active');
			$('.catalog__list').removeClass('catalog__list--active');
		}
	});

	//======Второй Каталог=========

	$('.header-menu__catalog-btn').on('click', function () {
		$(this).toggleClass('header-menu__catalog-btn--active');
		$('.header-menu__catalog-list').toggleClass('header-menu__catalog-list--active');
	});

	$('.header-menu__catalog-list').on('click', function () {
		$('.header-menu__catalog-btn').removeClass('header-menu__catalog-btn--active');
		$('.header-menu__catalog-list').removeClass('header-menu__catalog-list--active');
	});

	$('html').on('click', function (event) {
		if (!$(event.target).closest('.header-menu__catalog-btn').length) {
			$('.header-menu__catalog-btn').removeClass('header-menu__catalog-btn--active');
			$('.header-menu__catalog-list').removeClass('header-menu__catalog-list--active');
		}
	});


	//БУРГЕР МЕНЮ============

	$('.header-top__menu-btn, .header-menu__close').on('click', function () {
		$('.header-menu').toggleClass('header-menu--active');
		$('body').toggleClass('lock');
		$('body').toggleClass('overlay');
	});

	$('html').on('click', function (event) {
		if (!$(event.target).closest('.header-top__menu-btn, .header-menu__close').length) {
			$('.header-menu').removeClass('header-menu--active');
			$('body').removeClass('lock');
			$('body').removeClass('overlay');
		}
	});

	//search =================

	$('.user-nav__link--search').on('click', function () {
		$('.form-search').toggleClass('form-search--active');
	});

	var inp = document.querySelector('.form-search__input');
	window.addEventListener('resize', function () {
		inp.setAttribute('placeholder', this.innerWidth >= 768 ? 'Найти в магазине' : 'Я ищу...');
	});
	window.dispatchEvent(new Event('resize'));


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