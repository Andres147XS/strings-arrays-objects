/*Reto 1: Calculadora de Promedio de Calificaciones

Crear un script que calcule el promedio de calificaciones de un estudiante. El script debe cumplir con las siguientes condiciones:

    Solicita al usuario que ingrese las calificaciones del estudiante separadas por comas.
    Convierte las calificaciones ingresadas a un array utilizando split().
    Utiliza reduce() para sumar todas las calificaciones y calcular el promedio.
    Muestra el promedio de calificaciones al usuario.
*/

let marks = Number(prompt("Ingrese las calificaciones del estudiante separadas por comas: "));
let arrayMarks = marks.split(",");
console.log(arrayMarks);

let sum = arrayMarks.reduce((i, e) => i + e, 0) / arrayMarks.length;
console.log(sum);
