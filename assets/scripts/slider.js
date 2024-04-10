var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true, // Esto permitirá que el carrusel se repita
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // Aumenta el tiempo de espera entre cada diapositiva
      disableOnInteraction: false // Permite que el autoplay continúe después de la interacción del usuario
    }
  });