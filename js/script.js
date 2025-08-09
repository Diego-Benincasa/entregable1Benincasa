// Declaración de variables globales
let matriculaCamion;
let taraCamion;
let netoFacturado;
let pesoBalanza;
let pesoEsperado;
let diferenciaPeso;
let registroPesadas = [];

// Saludo personalizado
let nombreUsuario = prompt("Ingresa tu nombre");
confirm(
  "Bienvenido a CEMODA, " +
    nombreUsuario +
    ". Para continuar, presiona Aceptar."
);

// Función para pedir datos
function entradaDatos() {
  matriculaCamion = prompt("Matrícula del camión a registrar");
  taraCamion = parseFloat(prompt("¿Cuánto pesa el camión vacío?"));
  netoFacturado = parseFloat(prompt("Ingresa el neto facturado"));
  pesoBalanza = parseFloat(prompt("¿Qué peso marca la balanza?"));
}

// Función para procesar el pesaje
function procesarPesaje() {
  pesoEsperado = taraCamion + netoFacturado;
  diferenciaPeso = pesoBalanza - pesoEsperado;
}

// Función para mostrar resultados
function mostrarResultados() {
  if (diferenciaPeso === 0) {
    alert("Autorizadísimo");
  } else if (diferenciaPeso >= 1 && diferenciaPeso <= 20) {
    alert("Autorizado VERDE");
  } else if (diferenciaPeso <= -1 && diferenciaPeso >= -20) {
    alert("Autorizado AMARILLO");
  } else if (diferenciaPeso >= 21) {
    alert("No autorizado ROJO");
  } else if (diferenciaPeso <= -21) {
    alert("No autorizado AMARILLO");
  } else {
    alert("Ingrese un dato válido");
  }
}

// Bucle principal para registrar múltiples camiones
let continuar = true;

while (continuar) {
  entradaDatos();
  procesarPesaje();
  mostrarResultados();

  // Guardar registro
  registroPesadas.push({
    matricula: matriculaCamion,
    tara: taraCamion,
    neto: netoFacturado,
    balanza: pesoBalanza,
    esperado: pesoEsperado,
    diferencia: diferenciaPeso,
  });

  continuar = confirm("¿Querés validar otro camión?");
}

// Mostrar historial en consola
console.log("Historial de pesadas:", registroPesadas);
