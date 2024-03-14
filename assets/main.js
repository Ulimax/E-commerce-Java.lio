 
function ocultarLogoLetras () {
     if (window.innerWidth < 665) 
     document.getElementById("logo_Letras").style.display = "none";

}  
ocultarLogoLetras(); 

console.log(window.innerWidth ); 


window.addEventListener("resize", evento => window.innerWidth  < 665 ? document.getElementById("logo_Letras").style.display = "none": document.getElementById("logo_Letras").style.display = "block"); 