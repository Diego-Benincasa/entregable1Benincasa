//Declaracón de variables con scope global

let matriculaCamion;
let taraCamion;
let netoFacturado;
let pesoBalanza;
let pesoEsperado;
let diferenciaPeso;

//Saludo personalizado

let nombreUsuario = prompt("Ingresa tu nombre");
confirm("Bienvenido a CEMODA, " + " " + nombreUsuario + " " + "para continuar presiona aceptar");

//Pidiendo datos

function entradaDatos() {
  matriculaCamion = prompt("Matricula del camion a registrar");
  taraCamion = parseFloat(prompt("Cuanto pesa el camion vacio"));
  netoFacturado = parseFloat(prompt("Ingresa el neto facturado!"));
  pesoBalanza = parseFloat(prompt("Que peso marca la balanza"));
}

//Proceso de datos

function procesarPesaje() {
  pesoEsperado = taraCamion + netoFacturado;
  diferenciaPeso = pesoBalanza - pesoEsperado;
}

//Exposicion de datos

function mostrarResultados() {
  if (diferenciaPeso === 0) {
    console.log("Autorizadisimo");
  } else if (diferenciaPeso >= 1 && diferenciaPeso <= 20) {
    console.log("Autorizado VERDE");
  } else if (diferenciaPeso <= -1 && diferenciaPeso >= -20) {
    console.log("Autorizado AMARILLO");
  } else if (diferenciaPeso >= 21) {
    console.log("No autorizado ROJO");
  } else if (diferenciaPeso <=-21 ){
    console.log("No autorizado AMARILLO");
  } else console.log("Ingrese un dato valido");
}
entradaDatos();
procesarPesaje();
mostrarResultados();