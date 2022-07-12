$(function () {

	$('.product-page__tabs-top-item').on('click', function (e) {
		e.preventDefault();
		$('.product-page__tabs-top-item').removeClass('product-page__tabs-top-item--active');
		$(this).addClass('product-page__tabs-top-item--active');

		$('.product-page__tabs-content-item').removeClass('product-page__tabs-content-item--active');
		$($(this).attr('href')).addClass('product-page__tabs-content-item--active');
	});

	$('.product-page__slide-list').slick({
		infinite: false,
		prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prew product-page__slick-prew"><svg class="top-slider__arrow" width="18" height="32"> <use xlink: href="images/sprite.svg#icon-prev"></use><span class="sr-only"> Предыдущий слайд</span></svg></button>',
		nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next product-page__slick-next"><svg class="top-slider__arrow" width="18" height="32"> <use xlink: href="images/sprite.svg#icon-next"></use><span class="sr-only"> Следующий слайд</span></svg></button>',
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
				dots: true,
			}
		}, ]
	});

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

	$('.offers__slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		infinite: false,
		prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prew"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-prev"></use><span class="sr-only"> Предыдущий слайд</span></svg></button>',
		nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"> <svg class="top-slider__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-next"></use><span class="sr-only"> Следующий слайд</span></svg></button>',

		responsive: [{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: false,
					arrows: false,
					dots: true,
				}
			},
		]
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

	//$('html').on('click', function (event) {
	//	if (!$(event.target).closest('.header-top__menu-btn, .header-menu__close').length) {
	//		$('.header-menu').removeClass('header-menu--active');
	//		$('body').removeClass('lock');
	//		$('body').removeClass('overlay');
	//	}
	//});


	//ФИЛЬТР =================

	$(function () {
		$('.catalog-content__fil-btn, .filter__close').on('click', function () {
			$('.filter').toggleClass('filter--active');
			$('body').toggleClass('lock');
			$('body').toggleClass('overlay');
		});

	});

	//ФИЛЬТР  filter-category=================

	$('.filter-category__btn').on('click', function () {
		$('.filter-category__form, .filter-category__btn').toggleClass('filter-category--active');
	});

	//ФИЛЬТР  filter-offer=================

	$('.filter-offer__btn').on('click', function () {
		$('.filter-offer__form, .filter-offer__btn').toggleClass('filter-offer--active');
	});

	//ФИЛЬТР  filter-brand=================

	$('.filter-brand__btn').on('click', function () {
		$('.filter-brand__form, .filter-brand__btn').toggleClass('filter-brand--active');
	});

	//ФИЛЬТР  filter-prace=================

	$('.filter-price__btn').on('click', function () {
		$('.filter-price__form, .filter-price__btn').toggleClass('filter-price--active');
	});

	var $range = $(".filter-price__input");
	var $inputFrom = $(".filter-price__from");
	var $inputTo = $(".filter-price__to");
	var instance;
	var min = 0;
	var max = 1000;
	var from = 0;
	var to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("change", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});

		$(this).prop("value", val);

	});

	$inputTo.on("change", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});

		$(this).prop("value", val);
	});

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},

		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	$('.catalog-content__select').styler();
	$('.product-page__count').styler();

	$('.catalog-content__btn').on('click', function () {
		$('.catalog-content__btn').removeClass('catalog-content__btn--active');
		$(this).addClass('catalog-content__btn--active');
	});

	$('.button-list').on('click', function () {
		$('.catalog-products__cards').addClass('catalog-products__cards--list');
	});

	$('.button-grid').on('click', function () {
		$('.catalog-products__cards').removeClass('catalog-products__cards--list');
	});


	$('.pagination__prev').on('click', function () {
		$('.pagination__prev').toggleClass('pagination__prev--disabled');
	});

	$('.pagination__item').on('click', function () {
		$('.pagination__item').removeClass('pagination__item--active');
		$(this).addClass('pagination__item--active');
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

	$('.rating').rateYo({
		spacing: "6px",
		starWidth: "16px",
		normalFill: "#C1C1C14D",
		ratedFill: "#FFB800",
		readOnly: true,
		starSvg: '<svg><use xlink:href="images/sprite.svg#icon-star"></use></svg>',
	});

	$('.rating-form').rateYo({
		spacing: "6px",
		starWidth: "16px",
		normalFill: "#C1C1C14D",
		ratedFill: "#FFB800",
		fullStar: true,
		starSvg: '<svg><use xlink:href="images/sprite.svg#icon-star"></use></svg>',
	});

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);
});