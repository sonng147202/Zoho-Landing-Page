$( document ).ready(function() {
  // To Top
  $("nav .intro").click(function() {
    $(window).scrollTop(0);
  });
  // Nav Shadow 
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    $('nav').removeClass('shadow')
    if($(this).scrollTop() > 100){
      $('nav').addClass('shadow')
    }
  })
  // Slider Pricing Table
  $('.pricing-table').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });
  // Responsive
  $(window).resize(function() {
    // 992px
    if (window.matchMedia('(max-width: 992px)').matches) {
      
    }
    // 768px
    if (window.matchMedia('(max-width: 768px)').matches) {
      // feature
      var tabStandard = $("#tab-standard");
      var tabRofessional= $("#tab-rofessional");
      var tabui= $(".tabui");
      var tabhindin= $(".tabhindin");

      tabStandard.click(function () {
        tabui.css("display", "block");
        tabhindin.css("display", "none");
      });
      tabRofessional.click(function () {
        tabhindin.css("display", "block");
        tabui.css("display", "none");
      });
    }
  })
  AOS.init();
});
