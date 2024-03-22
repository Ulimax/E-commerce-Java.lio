const getPageName = () => {
     return window.location.pathname.split("/").pop() ? window.location.pathname.split("/").pop() : "index.html";
}

/* const renderMisc = () => {
     document.querySelector("head").innerHTML += `
     <link rel="icon" href="./assets/icons/logo-planet.png">
     <link rel="stylesheet" href="./assets/style.css">
     `;
} */

const renderNavbar = () => {
     const pages = ["index.html", "contact-form.html", "blog.html", "about-us.html"];

     document.querySelector("header").innerHTML = `
     <nav class="navbar navbar-expand bg-body-transparent d-none d-md-block">
     <div class="container-fluid">
          <a class="navbar-brand ms-2" href="/index.html">
               <img src="/assets/icons/logo-planet.png" alt="Logo de Nuevo Mundo Travel" width="60" height="auto" class="d-inline-block">
          </a>
          <a class="navbar-brand ms-2 me-auto d-inline-block d-none d-xl-block" id="logo-letras" href="/index.html">
               <img src="/assets/icons/logo-letters.png" alt="Logo-letras" width="200" height="auto">
          </a>

          <form id="xpd-nav-search-grp" class="d-flex titillium-web-semibold ms-auto me-4" role="search">
              <input id="xpd-nav-search" class="form-control me-1" type="search" placeholder="Búsqueda" aria-label="Search">
              <button id="xpd-nav-search-btn" class="btn titillium-web-semibold ms-1" type="submit">Buscar</button>
          </form>

          <ul class="navbar-nav navbar-text mb-2 mb-lg-0 d-flex align-items-center">
               <li class="nav-item xpd-nav-item">
                    <a class="nav-link mx-2 titillium-web-semibold" aria-current="page" href="/index.html">Inicio</a>
               </li>
               <li class="nav-item xpd-nav-item">
                    <a class="nav-link mx-2 titillium-web-semibold" aria-current="page" href="/assets/pages/contact-form.html">Contáctanos</a>
               </li>
               <li class="nav-item xpd-nav-item">
                    <a class="nav-link mx-2 titillium-web-semibold" aria-current="page" href="/assets/pages/blog.html">Blog</a>
               </li>
               <li class="nav-item xpd-nav-item">
                    <a class="nav-link ms-2 me-3 titillium-web-semibold" aria-current="page" href="/assets/pages/about-us.html">Acerca de nosotros</a>
               </li>
               <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                         aria-expanded="false">
                         <img class="nav-login-i" src="/assets/icons/login-female-woods.png" height="auto" width="25" alt="icono de login">
                         <img class="nav-login-i" src="/assets/icons/login-male-woods.png" height="auto" width="25" alt="icono de login">
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                         <li><a class="dropdown-item" href="/assets/pages/login.html">Inicia sesión</a></li>
                         <li><a class="dropdown-item" href="/assets/pages/login.html">¡Regístrate!</a></li>
                         <li><hr class="dropdown-divider"></li>
                         <li><a class="dropdown-item" href="/assets/pages/login.html">Mis viajes</a></li>
                    </ul>
               </li>
          </ul>
          <a href="/assets/pages/cart.html" class="me-2 ms-3">
               <img src="/assets/icons/backpack.png" alt="icono mochila" width="35" height="me-auto">
          </a>
     </div>
     </nav>
     <nav class="navbar bg-body-transparent d-md-none">
          <div class="container-fluid">
               <a id="cpd-nav-cart-i" class="navbar-brand ms-2" href="/index.html"><img src="/assets/icons/logo-planet.png" alt="Logo Nuevo Mundo Travel" width="45" height="auto">
               <a href="/assets/pages/cart.html" class="me-1"> <img src="/assets/icons/backpack.png" alt="icono mochila" width="35" height="me-auto"></a>
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
                                   <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/blog.html">Blog</a>
                              </li>
                         <li class="nav-item cpd-nav-item">
                              <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/about-us.html">Acerca de nosotros</a>
                         </li>
                         <hr class="border bg-dark-subtle border-2 opacity-50">
                         <li class="nav-item cpd-nav-item">
                              <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/login.html" >Inicia sesión</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link active titillium-web-semibold" aria-current="page" href="/assets/pages/login.html" >¡Regístrate!</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link active titillium-web-semibold" aria-current="page" href="#">Mis viajes</a>
                         </li>
                         <hr class="border bg-dark-subtle border-2 opacity-50">
                    </ul>
                    <form class="d-flex titillium-web-semibold ms-auto me-3" role="search">
                         <input id="cpd-nav-search" class="form-control me-1" type="search" placeholder="Búsqueda" aria-label="Search">
                         <button id="cpd-nav-search-btn" class="btn titillium-web-semibold ms-1" type="submit">Buscar</button>
                    </form>
               </div>
          </div>
          </div>
     </nav>`;
     
     document.querySelectorAll("li.xpd-nav-item > a")[pages.indexOf(getPageName())].classList.add("disabled");
     document.querySelectorAll("li.cpd-nav-item > a")[pages.indexOf(getPageName())].classList.add("disabled");
};

const renderFooter = () => {
     document.querySelector("footer").innerHTML = `
     <div class="container-fluid footer">
          <div class="row">
               <div class="ftr-section col-12 col-sm-4 my-4 p-4 text-light titillium-web-semibold">
                    <div id="ftr-logo-cntr" class="d-flex my-4">
                         <img class="m-auto" src="/assets/icons/logo.png" width="100px" alt="Logo nuevo mundo travel">
                    </div>
                    <p class="titillium-web-semibold my-4">Av. Adolfo López Mateos Sur 2077, Jardines Plaza del Sol, 44510 Guadalajara, Jalisco, México.</p>
                    <p class="titillium-web-semibold">¡Conócenos!</p>
                    <div class="ftr-smedia-cntr d-flex">
                         <a href=""><img class="ftr-smedia-i"src="/assets/img/Instagram_logo_2016.svg.png" alt="Instagram"></a>
                         <a href=""><img class="ftr-smedia-i"src="/assets/img/Facebook_f_logo_(2019).svg" alt="Facebook"></a>
                         <a href=""><img class="ftr-smedia-i"src="/assets/img/WhatsApp.svg.png" alt="Whatsapp"></a>
                    </div>
               </div>
               <div class="ftr-section col-12 col-sm-4 my-4 p-4 text-light titillium-web-semibold">
                    <p class="titillium-web-semibold fw-bold">Navegación</p>
                    <ul class="ftr-nav titillium-web-semibold my-4">
                         <li><a href="/assets/pages/contact-form.html">Contacto</a>
                         <li><a href="/assets/pages/blog.html">Blog</a>
                         <li><a href="/assets/pages/about-us.html">Acerca de nosotros</a>
                    </ul>
               </div>
               <div class="ftr-section col-12 col-sm-4 my-4 p-4 text-light titillium-web-semibold rounded-3">
                    <a class="titillium-web-semibold" href="">Politica de privacidad</a>
                    <a class="titillium-web-semibold" href="">Aviso legal</a>
                    <a class="titillium-web-semibold" href="">Cookies</a>
                    <p class="titillium-web-semibold mt-4">Impulsado por</p>
                    <a href="https://mexico.generation.org/">
                    <img src="/assets/icons/generation-logo-white.png" width="120px" class="mb-4" height="auto" alt="Logo Generation"></a>
               </div>
          </div>
          <div class="row text-light text-center p-0 mt-auto titillium-web-semibold">
               <p class="mt-auto">Copyright &copy 2024 Nuevo Mundo Travel</p>
               <p class="">Todos los derechos reservados</p>
          </div>
     </div>
     `;
}

const mainRender = (function () {
     renderNavbar();
     document.getElementsByClassName("nav-login-i")[Math.round(Math.random())].style.display = "inline-block";
     renderFooter();
}());