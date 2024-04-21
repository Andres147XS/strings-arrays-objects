let Users = [];
let option = prompt("¿Desea crear un correo electrónico? (si/no)").toLowerCase();

while(option === "si") {
    let nameComplete = prompt("Ingrese su primer nombre y primer apellido: ").toLowerCase();
    let array = nameComplete.split(" ");

    while(array.length !== 2) {
        alert("El nombre ingresado debe tener exactamente 2 palabras.");
        nameComplete = prompt("Ingrese por favor primer nombre y primer apellido: ").toLowerCase();
        array = nameComplete.split(" ");
    }

    alert("Los datos ingresados son: " + "[" + array + "]");

    let lettersName = array[0].slice(0, 3);
    let lettersLastName = array[1].slice(0, 3);
    let email = lettersName + lettersLastName;
    let count = 1;
    let lastEmail = email;

    while(Users.includes(email)) {
        email = lastEmail + count;
        count++;
    }

    Users.push(email);
    alert("Su correo electrónico es: " + email + "@myDomain.com");

    option = prompt("¿Desea crear otro correo electrónico? (si/no)").toLowerCase();
}

console.log(Users);