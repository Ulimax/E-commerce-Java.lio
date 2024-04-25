function renderContent() {
  document.querySelector("main").innerHTML = `
    
    <section >

                <div class="aboutus-container" >
                    <div class="aboutus-text">
                        <h2 >Acerca de nosotros</h2>
                        <p>Este proyecto inició hace tres años en colaboración con mi mejor amigo, buscábamos compartir nuestros lugares favoritos con otras amistades.</p>
                        <p>Nuestro primer viaje fue pensado para 15 personas y atrajo un total de 52 participantes, tras este éxito, continuamos organizando viajes que conectan con la naturaleza y promueven actividades físicas en México.</p>
                        <p>Nuestro equipo, comprometido con un servicio excepcional, colabora con comunidades locales, guías expertos y proveedores responsables para ofrecer experiencias únicas y enriquecedoras.
                        </p>
                    </div>
                    <div class="aboutus-img">
                        <img class="img-fluid" src="../img/nevadoaboutus.png" alt="nevadocolima">
                    </div>
                </div>
                
    </section>

    
    
    <h1> NUESTRA FILOSOFÍA </h1>
    <section class="filosofia" >

        <div class="mision">
            <h2> Misión </h2>
            <p>Ofrecer experiencias de ecoturismo auténticas y enriquecedoras para aquellos que buscan conectar
                con la naturaleza de manera responsable. Nuestro objetivo es fomentar la conservación ambiental
                y crear conciencia sobre la importancia de preservar nuestros ecosistemas, brindando servicios
                de calidad que superen las expectativas de nuestros clientes.</p>
        </div>

        <div class="vision">
            <h2> Visión </h2>
            
            <p>Queremos ser la referencia en ecoturismo, ofreciendo experiencias auténticas y enriquecedoras en
                la naturaleza. Buscamos inspirar la conservación ambiental y cambiar la forma en que la gente
                disfruta y valora la naturaleza.</p>
        </div>

        <div class="valores">
            <h2> Valores </h2>
            <ul>
                <li><strong>Colaboración</strong>: Trabajar en conjunto con comunidades locales y organizaciones ambientales
                    para lograr un impacto positivo.</li>
                <li><strong>Conciencia social</strong>: Contribuir al bienestar de las comunidades locales y promover un
                    turismo responsable.</li>
                <li><strong>Pasión por la naturaleza</strong>: Promover el amor y el respeto por la naturaleza en todo lo que
                    hacemos.</li>
                <li><strong>Responsabilidad ambiental</strong>: Compromiso con la conservación y protección de los
                    ecosistemas naturales.</li>
                <li><strong>Excelencia en el servicio</strong>: Atención personalizada a nuestros clientes, brindar seguridad
                    y confianza en cada excursión.</li>
            </ul>
        </div>
    </section>

    <section style="height: 50rem;">
        <h2 >Equipo de desarrollo</h2>
        <div class="swiper mySwiper">
            <div class="swiper-wrapper" >
              <div class="swiper-slide uno" >
                <a href="https://github.com/max"> <img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/miza-ortega/"><img src="../img/linkedin.jpeg" class="linkedin"></a>
              </div>
              <div class="swiper-slide dos">
                <a href="https://github.com/arianacolmenares"> <img  src="../img/github.jpeg" class="github"></a>
                <a href="https://www.linkedin.com/in/ariana-colmenares-464a65207/"> <img src="../img/linkedin.jpeg" class="linkedin"> </a>   
              </div>
              <div class="swiper-slide tres">
                <a href="https://github.com/ElizondoVegaEric "><img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/eric-elizondo-vega/"><img src="../img/linkedin.jpeg" class="linkedin"></a>
              </div>
              <div class="swiper-slide cuatro">
                <a href="https://github.com/esquivelio"><img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/daniel-esquivel-de-alba-8a8577291/"> <img src="../img/linkedin.jpeg" class="linkedin"></a>
              </div>
              <div class="swiper-slide cinco">
                
                <a href="https://github.com/jlmwsk32"><img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/josedejesus-lopez/"><img class="linkedin" src="../img/linkedin.jpeg"  ></a>
              </div>
              <div class="swiper-slide seis">
                
                <a href="https://github.com/YetzelBaez23"><img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/yetzel-castillo-b35273231/"><img class="linkedin" src="../img/linkedin.jpeg"  ></a>
              </div>
              <div class="swiper-slide siete">
                <a href="https://github.com/m-gonzalezm"><img src="../img/github.jpeg" class="github" ></a>
                <a href="https://www.linkedin.com/in/miguel-ángel-gonzález-martínez-7847aa294/"><img class="linkedin" src="../img/linkedin.jpeg"  ></a>
              </div>
              
              <div class="swiper-slide ocho">
                
                <a href="https://github.com/PenelopeAlejandre"><img src="../img/github.jpeg" class="github" ></a>
                <a href="www.linkedin.com/in/penelope-alejandre-lopez"><img class="linkedin" src="../img/linkedin.jpeg"  ></a>
              </div>
            </div>
            <div class="swiper-button-next" style="visibility: hidden;"></div>
            <div class="swiper-button-prev" style="visibility: hidden;"></div>
            <div class="swiper-pagination" style="visibility: hidden;"></div>
          </div>
    </section>
  `;
}

setTimeout(() => {
  renderContent();
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

}, 0);