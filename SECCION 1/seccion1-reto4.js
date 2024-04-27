let evento = []

function add (name, date, description, cont){
    return{
        id: cont,
        name: name,
        date: date,
        description: description
    }
}
let cont = 0

let option = prompt("Desea ingresar al menu ?").toLowerCase()

while (option === "si"){
    let menu = parseInt(prompt("=========== Menu ===========\
    \n 1. Ingresar un evento\
    \n 2. Mostrar todos los eventos\
    \n 3. Buscar un evento\
    \n 4. Actualizar un evento\
    \n 5. Eliminar un evento\
    \n 6. Salir"))

    switch(menu){
        case 1:{ console.log("Ha seleccionado ingresar un evento")
        let name = prompt("Ingrese el nombre del evento: ")
        let date = prompt("Ingrese la fecha del evento: ")
        let description = prompt("Ingrese la descripción del evento: ")
        evento.push(add(name, date, description, cont))
        cont = cont ++
            break;}
        case 2:{ console.log("Ha seleccionado mostrar eventos")
        console.log(evento)
            break;}
        case 3:{ console.log("Ha seleccionado buscar un evento")

        let event1 = prompt("Qué evento desea buscar");

        let arrayFilter = evento.filter(e => e.name === event1);
        
        arrayFilter.forEach((name, index) => {
            console.log(name);
            console.log(`${index + 1} ${name} ${description} ${date}`);
        });  
            break;}
        case 4:{ console.log("Ha seleccionado actualizar un evento")
        /* 

    Actualización de Eventos

    Descripción: Permitir al usuario actualizar los detalles de un evento existente.
    Tareas:
        Solicitar el identificador del evento a actualizar.
        Permitir al usuario modificar cualquier campo del evento.
        Actualizar el objeto de evento.
    Métodos Utilizados: Object.keys(), Object.assign(), split(), trim()

*/
    prompt("Indique que evento desea actualizar: ")
            break;}
        case 5:{ console.log("Ha seleccionado eliminar un evento")
            break;}
        case 6:{ console.log("Ha seleccionado salir")
        console.log("Hasta luego")
            break;}

    }
}


let name = prompt("Ingrese el nombre del evento: ")
    let date = prompt("Ingrese la fecha del evento: ")
    let description = prompt("Ingrese la descripción del evento: ")

    // evento = add(name, date, description)
    // console.log(evento)
    // menu = prompt("Desea ingresar al menu ?").toLowerCase()
    // cont++
