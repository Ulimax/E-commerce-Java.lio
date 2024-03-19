const cargaNavbarColapsada = () => {
     document.getElementsByTagName("header")[0].innerHTML = `
     <nav id="full-navbar" class="navbar navbar-expand-lg bg-body-tertiary d-flex mb-3 me-auto">
     <div class="container-fluid">
     <a class="navbar-brand ms-2" href="#">
          <img src="./assets/icons/Logo_Planeta.png" alt="Logo-Nuevo-Mundo-Travel-Oficial" width="50" height="me-auto">
     </a>
     <button id="boton-hamburguesa" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
     </button>
     <button class="mx-2 border border-0" id="carrito" type="button"> <img src="./assets/icons/icono_mochila.png"
       height="me-auto" width="35"></button>
     </div>
   
     <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <form id="grupo-buscador" class="d-flex col-4 p-2 titillium-web-semibold me-3" role="search">
          <input id="buscador" class="form-control w-80" type="search" placeholder="Buscar" aria-label="Search">
          <button id="boton-lupa" class="btn btn-outline-info-subtle border border-0 titillium-web-semibold"
          type="submit">🔍︎</button>
          </form>
          <ul class="navbar-nav mb-2 mb-lg-0 p-2">
          <li class="nav-item ">
          <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Contáctanos</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Blog</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active ms-1 me-3 titillium-web-semibold" aria-current="page" href="#">Acerca de nosotros</a>
          </li>
   
          </ul>
   
     </div>
     </nav>
     `;
     document.getElementById("logo-letras").style.display = "none";
};

const cargaNavbarExpandida = () => {
     document.getElementsByTagName("header")[0].innerHTML = `
          <nav id="full-navbar" class="navbar navbar-expand-lg bg-body-tertiary d-flex mb-3 me-auto">
          <div class="container-fluid">
          <a class="navbar-brand ms-2" href="#">
               <img src="./assets/icons/Logo_Planeta.png" alt="Logo-Nuevo-Mundo-Travel-Oficial" width="60" height="me-auto">
          </a>
          <a class="navbar-brand ms-2" id="logo-letras" href="#">
               <img src="./assets/icons/Logo_Letras.png" alt="Logo-letras" width="200" height="auto">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               <form id="grupo-buscador" class="d-flex col-4 p-2 titillium-web-semibold me-3" role="search">
               <input id="buscador" class="form-control w-80" type="search" placeholder="Buscar" aria-label="Search">
               <button id="boton-lupa" class="btn btn-outline-info-subtle border border-0 titillium-web-semibold"
               type="submit">🔍︎</button>
               </form>
               <ul class="navbar-nav mb-2 mb-lg-0 p-2">
               <li class="nav-item ">
               <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Inicio</a>
               </li>
               <li class="nav-item">
               <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Contáctanos</a>
               </li>
               <li class="nav-item">
               <a class="nav-link active mx-1 titillium-web-semibold" aria-current="page" href="#">Blog</a>
               </li>
               <li class="nav-item">
               <a class="nav-link active ms-1 me-3 titillium-web-semibold" aria-current="page" href="#">Acerca de nosotros</a>
               </li>
               <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#o" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img src="./assets/icons/icono_mountain.png" height="auto" width="25" alt="icono de login">
               </a>
               <ul id="menu-usuario" class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">¡Regístrate!</a></li>
                    <li><a class="dropdown-item" href="#">Inicia sesión</a></li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Mis viajes</a></li>
               </ul>
               </li>

               </ul>

          </div>
               <button class="mx-2 border border-0" id="carrito" type="button"> <img src="./assets/icons/icono_mochila.png"
               height="me-auto" width="35"></button>
          </div>
          </nav>`;
          document.getElementById("logo-letras").style.display = "block";
};

const cargaPrincipalNavbar = (function () {
     if (window.innerWidth  < 1400) cargaNavbarColapsada;
     else cargaNavbarExpandida;
}());

window.addEventListener("resize", evento => {
     if (window.innerWidth  < 1400) cargaNavbarColapsada;
     else cargaNavbarExpandida;
})