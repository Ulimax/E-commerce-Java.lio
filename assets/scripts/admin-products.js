const register= document.forms["register-form"];
register.addEventListener("submit", (e)=>{
    e.preventDefault();
const newDestination = {
    title: register.elements["destination"].value,
    date: register.elements["date"].value,
    price: register.elements["price"].value,
    description: register.elements["description"].value,
}    
});
const isValid = (newDestination)=>{
    let valid = true;
    const message=[];
    if(!newDestination.title && newDestination.title.length>20){
        valid = false;
        message.push("El nombre del destino no es válido, el campo supera los caracteres o está vacío");
    }
    if(newDestination.price<=0){
        valid = false;
        message.push("El precio del destino tiene no puede ser negativo");
    }
    if(!newDestination.description && newDestination.description.length<100){
        valid = false;
        message.push("La longitud mínima de la descripción es de 100 caracteres");
    }


}
