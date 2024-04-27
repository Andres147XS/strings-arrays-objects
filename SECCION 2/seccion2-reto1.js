let marks = prompt("Ingrese las calificaciones del estudiante separadas por comas")

let arrayMarks = marks.split(",")
console.log(arrayMarks)

let sum = 0

for (let i = 0; i<arrayMarks.length; i++){
    sum = sum + Number(arrayMarks[i])
}

let average = (sum/arrayMarks.length)

console.log("El promedio de las notas ingresadas es de: "+average)