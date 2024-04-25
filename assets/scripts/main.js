const getPageName = () => {
  return window.location.pathname.split("/").pop() ? window.location.pathname.split("/").pop() : "index.html";
};

/* const renderMisc = () => {
     document.querySelector("head").innerHTML += `
     <link rel="icon" href="./assets/icons/logo-planet.png">
     <link rel="stylesheet" href="./assets/style.css">
     `;
} */

const renderNavbar = () => {
  const pages = ["index.html", "contact-form.html", "about-us.html"];

  document.querySelector("header").innerHTML = `
    <nav class="navbar navbar-expand bg-body-transparent d-none d-md-block">
      <div class="container-fluid">
        <a class="navbar-brand ms-2" href="/index.html">
          <img src="/assets/icons/logo-planet.png" alt="Logo de Nuevo Mundo Travel" width="60" height="auto" class="d-inline-block">
        </a>
        <a class="navbar-brand ms-2 me-auto d-inline-block d-none d-xl-block" id="logo-letras" href="/index.html">
          <img src="/assets/icons/logo-letters.png" alt="Logo-letras" width="200" height="auto">
        </a>
      
        <ul class="navbar-nav navbar-text mb-2 ms-auto mb-lg-0 d-flex align-items-center">
          <li class="nav-item xpd-nav-item">
            <a class="nav-link mx-2 titillium-web-semibold" aria-current="page" href="/index.html">Inicio</a>
          </li>
          <li class="nav-item xpd-nav-item">
            <a class="nav-link mx-2 titillium-web-semibold" aria-current="page" href="/assets/pages/contact-form.html">Contáctanos</a>
          </li>
          <li class="nav-item xpd-nav-item">
            <a class="nav-link ms-2 me-3 titillium-web-semibold" aria-current="page" href="/assets/pages/about-us.html">Acerca de nosotros</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="nav-login-i" src="/assets/icons/login-female-woods.png" height="auto" width="25" alt="icono de login">
              <img class="nav-login-i" src="/assets/icons/login-male-woods.png" height="auto" width="25" alt="icono de login">
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="/assets/pages/login.html">Inicia sesión</a></li>
              <li><a class="dropdown-item" href="/assets/pages/sign-up.html">¡Regístrate!</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/assets/pages/login.html">Mis viajes</a></li>
            </ul>
          </li>
        </ul>
        <a href="/assets/pages/backpack.html" class="me-2 ms-3">
          <img src="/assets/icons/backpack.png" alt="icono mochila" width="35" height="me-auto">
          <span class="xpd-backpack-counter position-absolute top--10 translate-middle badge rounded-pill"></span>
        </a>
      </div>
    </nav>
    <nav class="navbar bg-body-transparent d-md-none">
      <div class="container-fluid">
        <a id="cpd-nav-cart-i" class="navbar-brand ms-2" href="/index.html"><img src="/assets/icons/logo-planet.png" alt="Logo Nuevo Mundo Travel" width="45" height="auto">
        <a href="/assets/pages/backpack.html" class="me-1">
          <img src="/assets/icons/backpack.png" alt="icono mochila" width="35" height="me-auto">
          <span class="cpd-backpack-counter position-absolute top--10 translate-middle badge rounded-pill"></span>  
        </a>
        <button class="navbar-toggler mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/assets/icons/logo-letters.png" alt="Letras nuevo mundo travel" width="200" height="me-auto">
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item cpd-nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="/index.html">Inicio</a>
              </li>
              <li class="nav-item cpd-nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/contact-form.html">Contáctanos</a>
              </li>
              <li class="nav-item cpd-nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/about-us.html">Acerca de nosotros</a>
              </li>
              <hr class="border bg-dark-subtle border-2 opacity-50">
              <li class="nav-item cpd-nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/login.html" >Inicia sesión</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/sign-up.html" >¡Regístrate!</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active titillium-web-semibold" aria-current="page" href="#">Mis viajes</a>
              </li>
              <hr class="border bg-dark-subtle border-2 opacity-50">
            </ul>   
          </div>
        </div>
      </div>
    </nav>`;

  document.querySelectorAll("li.xpd-nav-item > a")[pages.indexOf(getPageName())].classList.add("disabled");
  document.querySelectorAll("li.cpd-nav-item > a")[pages.indexOf(getPageName())].classList.add("disabled");
};

const renderFooter = () => {
  document.querySelector("footer").innerHTML = `
       <div class="footer-decorator"></div>
        <div class="container-fluid footer d-flex flex-column titillium-web-semibold">
             <div class="mt-4">
             <div class="row">
               <div class="ftr-section d-flex flex-column col-12 col-md-4 p-4 text-light">
               <div class="d-flex my-4">
                   <img src="/assets/icons/logo-white.png" class="m-auto" alt="Logo nuevo mundo travel" width="100">
                 </div>
                 <span class="mt-4">Av. Adolfo López Mateos Sur 2077, Jardines Plaza del Sol, 44510 Guadalajara, Jalisco, México.</span>
                 <span class="mt-4">¡Conócenos!</span>
                 <div class="ftr-smedia-cntr d-flex mt-4">
                   <a href="https://www.instagram.com/nuevomundo_travel"><img class="ftr-smedia-i" src="/assets/icons/instagram-white.svg" alt="Instagram"></a>
                   <a href="https://www.facebook.com/nuevomundotraveltuours"><img class="ftr-smedia-i" src="/assets/icons/facebook-white.svg" alt="Facebook"></a>
                   <a href="https://wa.me/3221749411"><img class="ftr-smedia-i" src="/assets/icons/whatsapp-white.svg" alt="WhatsApp"></a>
                 </div>
               </div>
               <div class="ftr-section col-12 col-md-4 mt-4 p-4 text-light">
                  <span class="titillium-web-semibold fw-bold">Navegación</span>
                 <ul class="ftr-nav titillium-web-semibold mt-4">
                 <li><a href="/index.html">Inicio</a>
                   <li><a href="/assets/pages/contact-form.html">Contacto</a>
                   <li><a href="/assets/pages/about-us.html">Acerca de nosotros</a>
                 </ul>
                  <div class="d-flex flex-column mt-4">
                  <span class="titillium-web-semibold fw-bold atention-label">Atención</span>
                  <span class="titillium-web-semibold mt-4">nuevomundotravell@gmail.com</span>
                  <span class="titillium-web-semibold">Lunes a domingo de 8 a.m. a 8 p.m.</span>
                  </div>
               </div>
               <div class="ftr-section d-flex flex-column col-12 col-md-4 my-4 p-4 text-light rounded-3">
                 <a href="/assets/pages/privacy-policy.html">Política de privacidad</a>
                 <a href="/assets/pages/privacy-policy.html">Aviso legal</a>
                 <a href="/assets/pages/privacy-policy.html">Cookies</a>
                 <span class="mt-4">Impulsado por</span>
                 <a class="mt-4" href="https://mexico.generation.org/">
                 <img src="/assets/icons/generation-logo-white.svg" width="120px" class="mb-4" height="auto" alt="Logo Generation"></a>
   
               </div>
                  </div>
             </div>
             <div class="mt-auto">
             <div class="row text-light text-center p-0 ftr-copyright">
               <span class="mt-auto">Copyright \u00a9 2024 Nuevo Mundo Travel</span>
               <span class="">Todos los derechos reservados</span>
             </div>
             </div>
           </div>
     `;
};

const includeLinks = () => {
  document.head.innerHTML += `
       <link rel="icon" href="/assets/icons/logo-planet.png">
       <link rel="stylesheet" href="/assets/styles/default.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
     `;
};

const renderFirstLoading = () => {
  document.body.innerHTML += `
     <div id="loading-label">
       <figure id="loading">
         <img id="loading-static" src="/assets/icons/loading-label.png" alt="">
         <img id="loading-animated" src="/assets/icons/loading.gif" alt="">
       </figure>
     </div>
     `;
  setTimeout(() => document.querySelector("#loading-label").classList.add("d-none"), 2000);
};

const mainRender = (function () {
  if (!sessionStorage.getItem("session"))
    renderFirstLoading();
  sessionStorage.setItem("session", "active");
  includeLinks();
  renderNavbar();
  document.getElementsByClassName("nav-login-i")[Math.round(Math.random())].style.display = "inline-block";
  renderFooter();
}());
