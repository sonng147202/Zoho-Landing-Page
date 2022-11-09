$( document ).ready(function() {
  // Responsive
  
  // < 992px
  if (window.matchMedia('(max-width: 992px)').matches) {
    
  }
  // < 768px
  if (window.matchMedia('(max-width: 768px)').matches) {
    // feature
    var tabStandard = $("#tab-standard");
    var tabRofessional= $("#tab-rofessional");
    var tabui= $(".tabui");
    var tabhindin= $(".tabhindin");

    tabStandard.addClass("active");

    tabStandard.click(function () {
      tabRofessional.removeClass("active")
      tabStandard.addClass("active");
      tabui.css("display", "table-cell");
      tabhindin.css("display", "none");
    });
    tabRofessional.click(function () {
      tabStandard.removeClass("active")
      tabRofessional.addClass("active");
      tabhindin.css("display", "table-cell");
      tabui.css("display", "none");
    });
  }
  $(window).resize(function(){
    // > 576px
    if (window.matchMedia('(max-width: 576px)').matches) {
      $("#banner .content .right img").attr("src","./assets/img/banner-mobi.png");

    }
    // > 992px
    if (window.matchMedia('(min-width: 768px)').matches) {
      $("#banner .content .right img").attr("src","./assets/img/banner.png");

    }
  });

  // To Top
  $("nav .intro").click(function() {
    $(window).scrollTop(0);
  });
  // Nav Shadow 
  $(window).scroll(function () {
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

  var btnAccordion = $(".accordion .accordion-button");

  for (let i = 0; i < btnAccordion.length; i++) {
    const btn = $(btnAccordion[i]);
    btn.on( "click", function() {
      btn.toggleClass("up")
    });
  }
  
  // btn.toggleClass("up");
  AOS.init();
});
