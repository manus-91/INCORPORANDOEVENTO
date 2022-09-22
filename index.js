const localCibeles = {
        nombre: "Cibeles",
        pais: "Argentina",
        provincia: "Santa fe",
        localidad: "Rosario",
        direccion: "BV Segui 739",
        telefono: 034125455445
}

console.log(localCibeles);


const textBox = document.querySelector("#user"); 
textBox.addEventListener("input", () => console.log(textBox.value));



function solicitarNombre() {
        let nombreIngresado = prompt("ingresar nombre ")
        alert("Hola " + nombreIngresado)
}
solicitarNombre();

function solicitarDireccion() {
        let direccionIngresada = prompt("Ingresar direccion a enviar")
        alert("Te enviaremos el pedido a " + direccionIngresada)
}
solicitarDireccion();


const platos = [" Canelones "," Carne al horno "," Pastel de carne "," Guiso de lentejas "]
alert("Nuestros platos son: " + platos)



let option;


if(option!==0) {
option = Number(prompt("Ingrese una opcion:\n1. Agregar a mis pedidos\n0. Salir "));
switch (option) {
        case 1:
                Number(prompt("Ingrese el plato:\n 1. Canelones\n 2. Carne al horno\n 3. Pastel de carne\n 4. Guiso de lentejas \n0. Salir"))
                break;
                
        case 0:        
                alert("Gracias, hasta la proxima");
                break;
        default:
                alert("la opcion ingresada no es correcta, intente de nuevo ");
                break;
}
}

