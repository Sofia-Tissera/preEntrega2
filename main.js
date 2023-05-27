// Simulador de operaciones matemáticas

// Entrada de usuario
function capturarEntrada() {
  var numero1 = parseInt(prompt('Ingrese el primer número:'));
  var numero2 = parseInt(prompt('Ingrese el segundo número:'));
  
  // Realizar operaciones
  var suma = sumar(numero1, numero2);
  var resta = restar(numero1, numero2);
  var multiplicacion = multiplicar(numero1, numero2);
  var division = dividir(numero1, numero2);
  var porcentaje = calcularPorcentaje(numero1, numero2);
  var concatenacion = concatenar(numero1, numero2);
  
  // Mostrar salida
  alert('Resultados:' +
    '\nSuma: ' + suma +
    '\nResta: ' + resta +
    '\nMultiplicación: ' + multiplicacion +
    '\nDivisión: ' + division +
    '\nPorcentaje: ' + porcentaje +
    '\nConcatenación: ' + concatenacion);
}

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 'Error: división por cero';
  }
}

// Función para calcular el porcentaje
function calcularPorcentaje(numero, porcentaje) {
  return (numero * porcentaje) / 100;
}

// Función para concatenar dos números como cadenas de texto
function concatenar(a, b) {
  return a.toString() + b.toString();
}

// Ejecutar el simulador
capturarEntrada();