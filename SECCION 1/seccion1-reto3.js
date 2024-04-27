let email = prompt("Ingrese por favor un correo electrónico: ")

function emailTest (email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}

let validemail = emailTest(email);

if (validemail){
    console.log("Correo electrónico válido");
}
else {
    console.log("Correo electrónico invalido");
}