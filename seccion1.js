let option = prompt("¿Desea crear un correo electronico? (si/no)").toLowerCase()

while(option == "si"){

    let nameComlete = prompt("Ingrese su primer nombre y primer apellido: ").toLowerCase();

let array = nameComlete.split(" ");

    while(array.length > 2){
        alert("El nombre ingresado tiene más de 2 palabras")

        array = prompt("Ingrese por favor primer nombre y primer apellido: ").toLowerCase();
        break
    }

alert("Los datos ingresados son: "+"["+array+"]")

let lettersName = array[0].slice(0,3)

let lettersLastname = array[1].slice(0,3)

alert("Su correo electronico es: "+lettersName+lettersLastname+"@myDomain.com")

option = prompt("Desea crear otro correo electronico: (si/no)").toLowerCase()
}

let listEmail = [];

let Username = lettersName + lettersLastname; //usuario = key {username : correo}
let email = lettersName+lettersLastname+"@myDomain.com"; //correo = contenido

let obj = Object.keys(listEmail);
if (obj.includes(Username)){
    alert("Ya existe un correo electronico registrado con este usuario");
}