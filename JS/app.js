//Constantes
const ImportanciaPrimerExamen = 0.4;
const ImportanciaSegundoExamen = 0.3;
const ImportanciaTrabajosClase = 0.3;

//Función para calcular la nota final
function calcularNotaFinal(examen1, examen2, trabajoenclase) {
  const notaFinal = (examen1 * ImportanciaPrimerExamen) + (examen2 * ImportanciaSegundoExamen) + (trabajoenclase * ImportanciaTrabajosClase);
  return notaFinal;
}

//Array de alumnos ingresados con sus calificaciones
const alumnos = [
  { nombre: "Juan", examen1: 80, examen2: 90, trabajoenclase: 95 },
  { nombre: "María", examen1: 70, examen2: 85, trabajoenclase: 80 },
  { nombre: "Pedro", examen1: 90, examen2: 95, trabajoenclase: 85 },
  { nombre: "Jesus", examen1: 70, examen2: 75, trabajoenclase: 75 },
  { nombre: "Ana", examen1: 85, examen2: 75, trabajoenclase: 85 },
  { nombre: "Victoria", examen1: 30, examen2: 100, trabajoenclase: 80 },
  { nombre: "Adriana", examen1: 60, examen2: 95, trabajoenclase: 85 },
  { nombre: "Marcos", examen1: 80, examen2: 60, trabajoenclase: 85 },
  { nombre: "Nicolas", examen1: 20, examen2: 95, trabajoenclase: 30 },
  { nombre: "Andres", examen1: 80, examen2: 75, trabajoenclase: 90 },
  { nombre: "Jazmin", examen1: 70, examen2: 65, trabajoenclase: 80 },
  { nombre: "Pablo", examen1: 65, examen2: 75, trabajoenclase: 75 }
];

//Resultado de la nota final
for (let alumno of alumnos) {
  const notaFinal = calcularNotaFinal(alumno.examen1, alumno.examen2, alumno.trabajoenclase);
  console.log("La nota final de " + alumno.nombre + " es: " + notaFinal);
}
