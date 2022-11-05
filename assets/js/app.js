$( document ).ready(function() {
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
  var arrowAccordion = $(".accordion .accordion-button .accordion-arrow");

  for (let i = 0; i < arrowAccordion.length; i++) {
    const btn = btnAccordion[i];
    const arrow = arrowAccordion[i];

    btn.click(() => {
      arrow.toggleClass("up");
    })
  }
  
  AOS.init();
});
// Responsive
$(window).resize(function() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    $("#banner .content .right img").attr("src","./assets/img/banner.png");
  }
  // 992px
  if (window.matchMedia('(max-width: 992px)').matches) {
    
  }
  // 768px
  if (window.matchMedia('(max-width: 768px)').matches) {
    console.log($("#banner .content .right"));
    $("#banner .content .right img").attr("src","./assets/img/banner-mobi.png");
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