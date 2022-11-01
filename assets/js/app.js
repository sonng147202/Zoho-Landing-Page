$( document ).ready(function() {
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
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 992px)').matches) {
      
    }

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
});
