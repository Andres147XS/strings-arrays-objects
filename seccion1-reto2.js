let password = prompt("Ingrese una contraseña:");

function pass(a) {
    return /[A-Za-z0-9!@#$%^&*()+=_-{}[\]:;"'?<>,.|\/\\~`].{8,}/.test(a);
}

if (pass(password)) {
    console.log("La contraseña es válida.");
} else {
    console.log("La contraseña no cumple con los requisitos.");
}