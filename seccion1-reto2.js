

let password = prompt("Ingrese una contraseña:")

if (password.length < 8) {
    alert("Debe tener minimo 8 caracteres")
}else{
    if(password.includes(Number) && password.includes(String) && password.includes(" ! @ # $ % ^ & *")){
        alert("Contraseña segura")
    }
}