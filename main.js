$(document).ready(function() {
	
	// first animates
	$('.slick').on('init', function(event, slick){
        var firstSlide = $('.slick .item[data-slick-index="0"]').find('[data-animation]');
        animate(firstSlide);
	});
	$('.slick').slick({
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchThreshold : 100,
		nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right fa-lg text-light"></i></button>',
		prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left fa-lg text-light"></i></button>',
		dots:true,
	});
	// next slide animate classes adding
    $('.slick').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var elems = $('.slick .item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        animate(elems);
    });
   
    function animate(elems) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elems.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animate__animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEnd, function() {
                $this.removeClass($animationType);
            });
        });
    }
	
	
});