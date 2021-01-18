// prevent links default behaviour //
$(".arrow-buttons li a").click 
(
    function (evt)
    {
      evt.preventDefault(); 
    } 
);

//collapse menu on click
$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

//testimonial slider
var owl = $('.main-slider');
owl.owlCarousel({
  margin: 20,
  nav: false,
  dots: false,
  items: 1,
  mouseDrag: false,
  center: true,
  rewind: true,
});

$(".owl-next").on('click',function(){        
  owl.trigger('next.owl');
});

$(".owl-prev").on('click',function(){        
  owl.trigger('prev.owl');
});

// blog slider 
var owl2 = $('#blogs')

owl2.owlCarousel({
  rewind:true,
  margin:20,
  nav:false,
  mouseDrag: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$(".blog-next").on('click',function(){        
  owl2.trigger('next.owl');
});

$(".blog-prev").on('click',function(){        
  owl2.trigger('prev.owl');
});
