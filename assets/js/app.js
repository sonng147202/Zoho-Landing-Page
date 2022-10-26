$( document ).ready(function() {
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      var swiper = new Swiper(".pricingTable", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        // loopFillGroupWithBlank: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          priceList: [
            "Mail Free",
            "Standard",
            "Professional"      
          ],
          renderBullet: function (index, className) {
            if (index == 0) {
              return '<span class="' + className + '">' + "Mail Free" + "</span>";
            }
            if (index == 1) {
              return '<span class="' + className + '">' + "Standard" + "</span>";
            }
            if (index == 2) {
              return '<span class="' + className + '">' + "Professional" + "</span>";
            }
          },
        },
      });
    }
  });
});