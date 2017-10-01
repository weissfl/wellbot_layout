/* ========================================================================
 * Выравнивание блоков по высоте
 * ======================================================================== */
$(window).on("load", function() {
	alignHeight(".section__inner-sm-6 .card__title", 2);
	alignHeight(".section__inner-sm-6", 2);
	alignHeight(".section__inner-sm-4", 3);
	alignHeight(".add-thing__title", 2);
});

/* ========================================================================
 * Flex Slider
 * ======================================================================== */
(function() {

var $window = $(window),
flexslider = { vars:{} };

function getGridSize() {
	return (window.innerWidth <= 992) ? 4 : 5;
}

//$(function () {
//	SyntaxHighlighter.all();
//});

	$(window).on("load", function() {
	  $('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 133,
		itemMargin: 15,
		customDirectionNav: $(".card-carousel__navigation"),
		asNavFor: '#slider',
		minItems: getGridSize(),
      	maxItems: getGridSize() 
	  });

	  $('#slider').flexslider({
		animation: "fade",
		customDirectionNav: $(".card-slider__navigation"),
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	  });
	});
	
	$window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
	
}());

$(function () {
	var icons = {
		header: "accordion__icon accordion__icon--close",
		activeHeader: "accordion__icon accordion__icon--open"
	};

	$("#accordion").accordion({
		heightStyle: "content",
		icons: icons,
		collapsible: true
	});
});

/* ========================================================================
 * Красим второе слово в заголовке карточки робота
 * ======================================================================== */
$(document).ready(function() {
  $('.page-robot__content h1').paintFirstWord('#37b5c2');
});
