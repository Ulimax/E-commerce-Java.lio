var swiper = new Swiper(".mySwiper", {
    
    grabCursor: true,
    loop: true, // Esto permitirá que el carrusel se repita
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });