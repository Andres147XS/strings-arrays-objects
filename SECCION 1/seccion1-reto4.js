let eventos = [];
let cont = 0;

let option = prompt("¿Desea ingresar al menú? (si/no)").toLowerCase();

while (option === "si") {
    let menu = parseInt(prompt(
        "=========== Menu ===========\
      \n 1. Ingresar un evento\
      \n 2. Mostrar todos los eventos\
      \n 3. Buscar un evento\
      \n 4. Actualizar un evento\
      \n 5. Eliminar un evento\
      \n 6. Salir"
    ));

    switch (menu) {
        case 1: {
            console.log("Ha seleccionado crear un evento");
            let nombre = prompt("Ingrese el nombre del evento: ");
            let fecha = prompt("Ingrese la fecha del evento (YYYY-MM-DD): ");
            let descripcion = prompt("Ingrese la descripción del evento: ");
            eventos.push({ id: ++cont, nombre, fecha, descripcion });
            console.log("Evento creado exitosamente.");
            break;
        }
        case 2: {
            console.log("Eventos almacenados:");
            eventos.forEach(evento => {
                console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Descripción: ${evento.descripcion}`);
            });
            break;
        }
        case 3: {
            console.log("Ha seleccionado buscar un evento por nombre");
            let nombreABuscar = prompt("Ingrese el nombre del evento a buscar: ").toLowerCase();
            let eventosEncontrados = eventos.filter(evento => evento.nombre.toLowerCase().includes(nombreABuscar));

            if (eventosEncontrados.length > 0) {
                console.log("Eventos encontrados:");
                eventosEncontrados.forEach(evento => {
                    console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Descripción: ${evento.descripcion}`);
                });
            } else {
                console.log("No se encontraron eventos con ese nombre.");
            }
            break;
        }
        case 4: {
            console.log("Ha seleccionado actualizar un evento");
            let idEventoActualizar = parseInt(prompt("Ingrese el ID del evento a actualizar: "));
            let eventoActualizar = eventos.find(evento => evento.id === idEventoActualizar);

            if (eventoActualizar) {
                console.log("Evento encontrado:");
                console.log(eventoActualizar);

                for (let key in eventoActualizar) {
                    let nuevoValor = prompt(`Ingrese el nuevo valor para ${key} (deje en blanco para mantener el mismo): `).trim();
                    if (nuevoValor !== "") {
                        eventoActualizar[key] = nuevoValor;
                    }
                }

                console.log("Evento actualizado exitosamente:");
                console.log(eventoActualizar);
            } else {
                console.log("No se encontró ningún evento con ese ID.");
            }
            break;
        }
        case 5: {
            console.log("Ha seleccionado eliminar un evento");
            let idEventoEliminar = parseInt(prompt("Ingrese el ID del evento a eliminar: "));
            let indiceEventoEliminar = eventos.findIndex(evento => evento.id === idEventoEliminar);

            if (indiceEventoEliminar !== -1) {
                eventos.splice(indiceEventoEliminar, 1);
                console.log("Evento eliminado exitosamente.");
            } else {
                console.log("No se encontró ningún evento con ese ID.");
            }
            break;
        }
        case 6: {
            console.log("Ha seleccionado salir");
            console.log("Hasta luego");
            option = "no";
            break;
        }
        default: {
            console.log("Opción no válida. Por favor, seleccione una opción del 1 al 6.");
            break;
        }
    }

    if (option === "si") {
        option = prompt("¿Desea ingresar al menú nuevamente? (si/no)").toLowerCase();
    }
}
