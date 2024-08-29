/*-----------------------------------------------------------------

Template Name:  Mistri - Industry and Engineering Template
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Mistri - Industry and Engineering Html5 Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	"use strict";
	// Preloader area start here ***
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});
	// Preloader area end here ***

	// Header area start here ***
	// Mobile Menu Start here
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(document).ready(function () {
		function handleMenuClick(e) {
			var element = $(this).parent("li");
			if (element.hasClass("open")) {
				element.removeClass("open");
				element.find("li").removeClass("open");
				element.find("ul").slideUp(300, "swing");
			} else {
				element.addClass("open");
				element.children("ul").slideDown(300, "swing");
				element.siblings("li").children("ul").slideUp(300, "swing");
				element.siblings("li").removeClass("open");
				element.siblings("li").find("li").removeClass("open");
				element.siblings("li").find("ul").slideUp(300, "swing");
			}
		}
		function applyMenuClickHandler() {
			if ($(window).width() <= 1200) {
				$(".main-menu li a").on("click", handleMenuClick);
			} else {
				$(".main-menu li a").off("click", handleMenuClick);
			}
		}
		applyMenuClickHandler();

		$(window).resize(function () {
			applyMenuClickHandler();
		});
	});
	// Mobile Menu end here

	// Menu Top Fixed Start here
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	// Menu Top Fixed end here
	// Header area end here ***

	// Banner slider area start here ***
	var sliderActive1 = ".banner-slider";
	var sliderInit1 = new Swiper(sliderActive1, {
		loop: true,
		slidesPerView: 1,
		speed: 2000,
		effect: "fade",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".banner-pegi",
			type: "fraction",
		},
	});
	// Here this is use for animate ***
	function animated_swiper(selector, init) {
		var animated = function animated() {
			$(selector + " [data-animation]").each(function () {
				var anim = $(this).data("animation");
				var delay = $(this).data("delay");
				var duration = $(this).data("duration");
				$(this)
					.removeClass("anim" + anim)
					.addClass(anim + " animated")
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					})
					.one("animationend", function () {
						$(this).removeClass(anim + " animated");
					});
			});
		};
		animated();
		init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		});
		init.on("slideChange", animated);
	}
	animated_swiper(sliderActive1, sliderInit1);

	// banner three slider ***
	var sliderActive2 = ".banner-slider3";
	var sliderInit2 = new Swiper(sliderActive2, {
		loop: true,
		slidesPerView: 1,
		effect: "fade",
		speed: 3000,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".banner-dot",
			clickable: true,
		},
	});
	// Here this is use for animate ***
	function animated_swiper(selector, init) {
		var animated = function animated() {
			$(selector + " [data-animation]").each(function () {
				var anim = $(this).data("animation");
				var delay = $(this).data("delay");
				var duration = $(this).data("duration");
				$(this)
					.removeClass("anim" + anim)
					.addClass(anim + " animated")
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					})
					.one("animationend", function () {
						$(this).removeClass(anim + " animated");
					});
			});
		};
		animated();
		init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		});
		init.on("slideChange", animated);
	}
	animated_swiper(sliderActive2, sliderInit2);

	var swiper = new Swiper(".banner-slider2", {
		speed: 2000,
		effect: "fade",
		loop: "true",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".banner-dot",
			clickable: true,
		},
	});

	var swiper = new Swiper(".banner-slider-row", {
		loop: "true",
		spaceBetween: 30,
		speed: 300,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".banner2-arry-next",
			prevEl: ".banner2-arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
	// Banner slider area end here ***

	// Service slider area start here ***
	var swiper = new Swiper(".service-slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 1000,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1440: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});
	// Service slider area end here ***

	// Project slider area start here ***
	var swiper = new Swiper(".project-slider", {
		spaceBetween: 30,
		speed: 500,
		loop: "true",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".pegi-number",
			type: "fraction",
		},
		navigation: {
			nextEl: ".project-arry-next",
			prevEl: ".project-arry-prev",
		},
	});
	var swiper = new Swiper(".project-slider2", {
		spaceBetween: 20,
		speed: 500,
		simulateTouch: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: "true",
		pagination: {
			el: ".pegi-number",
			type: "fraction",
		},
		navigation: {
			nextEl: ".project-arry-next",
			prevEl: ".project-arry-prev",
		},
	});
	// Project slider area end here ***

	// Product slider area start here ***
	var swiper = new Swiper(".product-slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".product-arry-next",
			prevEl: ".product-arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});
	// Product slider area end here ***

	// Team slider area start here ***
	var swiper = new Swiper(".team-slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".product-arry-next",
			prevEl: ".product-arry-prev",
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
	// Team slider area end here ***

	// Testimonial slider area start here ***
	var swiper = new Swiper(".testimonial-slider", {
		spaceBetween: 30,
		loop: "true",
		simulateTouch: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-arry-next",
			prevEl: ".testimonial-arry-prev",
		},
	});
	var swiper = new Swiper(".testimonial-slider2", {
		spaceBetween: 30,
		loop: "true",
		grabCursor: true,
		pagination: {
			el: ".testimonial-dot",
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
	// Testimonial slider area end here ***

	// Brand slider area start here ***
	var swiper = new Swiper(".brand-slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 300,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 5,
			},
			425: {
				slidesPerView: 3,
			},
		},
	});
	// Brand slider area end here ***

	// Brand slider area start here ***
	var swiper = new Swiper(".trust-slider", {
		loop: "true",
		spaceBetween: 20,
		speed: 300,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	// Brand slider area end here ***

	// Shop single swiper slider area start here ***
	var swiper = new Swiper(".shop-slider-thumb", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
	});
	var swiper2 = new Swiper(".shop-single-slide", {
		speed: 1000,
		loop: "true",
		grabCursor: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	// Shop single swiper slider area end here ***

	// Shop count js area start here ***
	jQuery(document).ready(($) => {
		$(".quantity").on("click", ".plus", function (e) {
			let $input = $(this).prev("input.qty");
			let val = parseInt($input.val(), 10); // Specify base 10
			$input.val(val + 1).change();
		});

		$(".quantity").on("click", ".minus", function (e) {
			let $input = $(this).next("input.qty");
			var val = parseInt($input.val(), 10); // Specify base 10
			if (val > 0) {
				$input.val(val - 1).change();
			}
		});
	});
	// Shop count js area end here ***

	// Image src js area start here ***
	$(document).ready(function () {
		$(document).on("click", ".changeImage", function () {
			var newImage = $(this).data("image");
			$("#myImage").attr("src", newImage);
		});
	});
	// Image src js area end here ***

	// Hide & show a div js area start here ***
	$(document).ready(function () {
		$(document).on("click", ".share-btn", function () {
			var target = $(this).data("target");
			$("#" + target).toggle();
		});
	});
	// Hide & show a div js area end here ***

	// Hide & show js area start here ***
	$(document).ready(function () {
		$(document).on("click", "#openButton", function () {
			$("#targetElement").removeClass("side_bar_hidden");
		});
		$(document).on("click", "#closeButton", function () {
			$("#targetElement").addClass("side_bar_hidden");
		});
	});
	// Hide & show js area end here ***

	// Isotope area start here ***
	var $grid = $(".portfolio-items").isotope({});
	// click here
	$(".portfolio-list").on("click", "li", function () {
		var filterValue = $(this).attr("data-filter");
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$(".portfolio-list").each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".active").removeClass("active");
			$(this).addClass("active");
		});
	});
	// Isotope area end here ***

	// Background image date area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image date area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 20,
		time: 2000,
	});
	// Counter up area end here ***

	// Niceselect area start here ***
	$(document).ready(function () {
		$("select").niceSelect();
	});
	// Niceselect area end here ***

	// Footer image popup start here ***
	$(".footer-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	// Footer image popup end here ***

	// Back to top area start here ***
	var scrollPath = document.querySelector(".scroll-up path");
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
	scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updatescroll = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength) / height;
		scrollPath.style.strokeDashoffset = scroll;
	};
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".scroll-up").addClass("active-scroll");
		} else {
			jQuery(".scroll-up").removeClass("active-scroll");
		}
	});
	jQuery(".scroll-up").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate(
			{
				scrollTop: 0,
			},
			duration
		);
		return false;
	});
	// Back to top area end here ***

	// Add class & remove class area start here ***
	$(document).ready(function () {
		$(document).on("click", ".radio-btn span", function () {
			$(this).toggleClass("radio-btn-active");
		});
	});
	// Add class & remove class area end here ***

	// WOW Animatin area start here ***
	new WOW().init();
	// WOW Animatin area start here ***

	// Quantity-js-area-start-here
	/* Set rates + misc */
	var taxRate = 0.05;
	var shippingRate = 15.0;
	var fadeTime = 300;

	/* Assign actions */
	$(".product-quantity input").change(function () {
		updateQuantity(this);
	});

	$(".product-removal button").click(function () {
		removeItem(this);
	});

	/* Recalculate cart */
	function recalculateCart() {
		var subtotal = 0;

		/* Sum up row totals */
		$(".product").each(function () {
			subtotal += parseFloat($(this).children(".product-line-price").text());
		});

		/* Calculate totals */
		var tax = subtotal * taxRate;
		var shipping = subtotal > 0 ? shippingRate : 0;
		var total = subtotal + tax + shipping;

		/* Update totals display */
		$(".totals-value").fadeOut(fadeTime, function () {
			$("#cart-subtotal").html(subtotal.toFixed(2));
			$("#cart-tax").html(tax.toFixed(2));
			$("#cart-shipping").html(shipping.toFixed(2));
			$("#cart-total").html(total.toFixed(2));
			if (total == 0) {
				$(".checkout").fadeOut(fadeTime);
			} else {
				$(".checkout").fadeIn(fadeTime);
			}
			$(".totals-value").fadeIn(fadeTime);
		});
	}

	/* Update quantity */
	function updateQuantity(quantityInput) {
		/* Calculate line price */
		var productRow = $(quantityInput).parent().parent();
		var price = parseFloat(productRow.children(".product-price").text());
		var quantity = $(quantityInput).val();
		var linePrice = price * quantity;

		/* Update line price display and recalc cart totals */
		productRow.children(".product-line-price").each(function () {
			$(this).fadeOut(fadeTime, function () {
				$(this).text(linePrice.toFixed(2));
				recalculateCart();
				$(this).fadeIn(fadeTime);
			});
		});
	}

	/* Remove item from cart */
	function removeItem(removeButton) {
		/* Remove row from DOM and recalc cart total */
		var productRow = $(removeButton).parent().parent();
		productRow.slideUp(fadeTime, function () {
			productRow.remove();
			recalculateCart();
		});
	}
	// Quantity-js-area-end-here
})(jQuery);
