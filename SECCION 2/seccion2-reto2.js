/*Reto 2: Calculadora de Estadísticas de Calificaciones

Crear un script que calcule estadísticas de calificaciones de un grupo de estudiantes. El script debe cumplir con las siguientes condiciones:

    Solicita al usuario que ingrese las calificaciones de los estudiantes separadas por comas.
    Convierte las calificaciones ingresadas a un array utilizando split().
    Utiliza métodos de arrays como reduce(), map(), filter(), sort() para calcular las siguientes estadísticas:
        Promedio de Calificaciones
        Calificación Máxima
        Calificación Mínima
        Número de Aprobados (calificación mayor o igual a 70)
        Número de Reprobados (calificación menor a 70)
        Lista de Calificaciones Ordenadas de Mayor a Menor
    Muestra las estadísticas de calificaciones al usuario.
*/

let marks = prompt("Ingrese las calificaciones del estudiante separadas por comas");

let arrayMarks = marks.split(",");
console.log(arrayMarks);

let sum = 0;

for (let i = 0; i < arrayMarks.length; i++) {
    sum = sum + Number(arrayMarks[i]);
}
let average = sum / arrayMarks.length;
let maxValue = Math.max(...arrayMarks);
let minValue = Math.min(...arrayMarks);

let aprovates = arrayMarks.filter(mark => mark >= 70).length;
let reprobates = arrayMarks.filter(mark => mark < 70).length;
let sortedMarks = arrayMarks.sort((a, b) => b - a);

console.log("El promedio de las calificaciones es: " + average);
console.log("La calificación máxima es: " + maxValue);
console.log("La calificación mínima es: " + minValue);
console.log("El número de aprobados es: " + aprovates);
console.log("El número de reprobados es: " + reprobates);
console.log("Las calificaciones ordenadas de mayor a menor son: " + sortedMarks);