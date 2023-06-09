//Copiar código
function copyToClipboard(codigo) {
  var codigoText = document.querySelector(codigo + ' code').textContent;
  navigator.clipboard.writeText(codigoText)
    .then(() => {
      var boton = document.querySelector(codigo + ' .btn');
      boton.querySelector('.fa-copy').style.display = 'none';
      boton.querySelector('.fa-check').style.display = 'inline-block';
      setTimeout(function () {
        boton.querySelector('.fa-copy').style.display = 'inline-block';
        boton.querySelector('.fa-check').style.display = 'none';
      }, 2000);
    })
    .catch((error) => {
      console.error('Error al copiar al portapapeles:', error);
    });
}
//--------------------------------------------------------------------------
// Función para detener ejecución con 'Esc'
function detenerConEsc() {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // Cancelar la ejecución de la función actual
      throw new Error('La ejecución de la función fue cancelada por el usuario.');
    }
  });
}
// -------------------------------------------------------------------------
// Función Sumatoria
function sumatoria(numeros) {
  let acu = 0;
  for (const numero of numeros) {
    acu += numero;
  }
  return acu;
}
// Función Promedio
function promedio(numeros) {
  return (numeros.length == 0 ? 0 : sumatoria(numeros) / numeros.length);
}
// --------------------------------------------------------------------------
// Función Mostrar Mayores Que...
function mostrarMayoresQue(numeros, valorASuperar) {
  let mayores = [];
  for (const numero of numeros) {
    if (numero > valorASuperar) {
      mayores.push(numero);
    }
  }
  return mayores;
}
// --------------------------------------------------------------------------
// Función Valor Máximo
function valorMaximo(numeros) {
  return Math.max(...numeros);
}
// --------------------------------------------------------------------------
// FUNCION GLOBAL cargarArray(limite, consulta)
function cargarArray(limite, consulta) {
  let miArray = [];
  for (i = 0; i < limite; i++) {
    let elementos = "";
    while (elementos.length !== 1) {
      elementos = prompt(`${consulta} ${i + 1}: `);
      if (elementos === null) {
        throw new Error("Ejecución terminada por el usuario");
      }
    }
    miArray.push(elementos);
  }
  return miArray;
}

// ---------------------------------------------------------------------------
// FUNCION MOSTRAR RESULTADOS
function mostrarResultados(resultadoN) {
  return document.getElementById(resultadoN);
}
// ---------------------------------------------------------------------------
// FUNCION ESTILOS DE SALIDA RESULTADOS
function generarEstiloResultado() {
  let estilo = `<span style='margin-top: .5rem;width: auto;border-left:5px solid rgb(94, 150, 60);border-right:5px solid rgb(49, 54, 63);font-weight: normal;padding: .3rem 0;background-color: rgb(49, 54, 63); color: white'>`;
  return estilo;
}
// ---------------------------------------------------------------------------
// Función Split Cadena de caracteres
function splitCadena(inputCadena, ignorarEsp) {
  // Separar los caracteres o las palabras dependiendo de la respuesta del usuario
  let arrayCadena;
  if (ignorarEsp === "S" || ignorarEsp === "") {
    // Eliminar espacios y separar caracteres con coma
    arrayCadena = inputCadena.replace(/\s+/g, "").split("");//'\s+/g' busca cualquier conjunto de uno o más espacios en blanco
    arrayCadena = arrayCadena.join("·").toUpperCase();
  } else {
    // Separar caracteres con espacios
    arrayCadena = inputCadena.split(" ");
    arrayCadena = arrayCadena.join(" ");
  }
  return arrayCadena;
}
// --------------------------------------------------------------------------------
// Función Split
function splitCadenaNum(inputCadenaNum, limiteNum) {
  let arrayCadenaNum = inputCadenaNum.split(",");
  arrayCadenaNum = arrayCadenaNum.map(num => parseInt(num.trim()));
  if (limiteNum && arrayCadenaNum.length > limiteNum) {
    arrayCadenaNum.length = limiteNum;
  }
  return arrayCadenaNum;
}
// ----------------------------------------------------------------------------------

// Ejercicio 1a
function capturar1a() {
  let numeros = [];

  let inputCadenaNum = document.getElementById("inputCadenaNum").value;
  let limiteNum = parseInt(document.getElementById("limiteNum").value);
  numeros = splitCadenaNum(inputCadenaNum, limiteNum);

  let suma = 0;
  let resultado = mostrarResultados("resultado1a");

  // Establecer el contenido del elemento <small> con la cantidad de números
  document.getElementById("cantidadIngresados").textContent = `Se computan los primeros ${limiteNum} números elegidos`;

  // Suma, promedio y mayores al promedio
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;

  const mayoresAlPromedio = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > promedio) {
      mayoresAlPromedio.push(numeros[i]);
    }
  }

  resultado.innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}El promedio de los números ingresados es: <br>'${promedio.toFixed(2)}'<br>
  Los número que superan el promedio son: <br>'${mayoresAlPromedio.join(", ")}'</span>`;
  document.getElementById("form1a").reset();
}

// Ejercicio 1
function capturar1() {
  let numeros = [];
  let suma = 0;
  let resultado = mostrarResultados("resultado1");

  for (let i = 0; i < 10; i++) {
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numeros.push(Number(numero));
        continuar = false;
      }
    }
  }

  // Suma, promedio y mayores al promedio
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;

  const mayoresAlPromedio = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > promedio) {
      mayoresAlPromedio.push(numeros[i]);
    }
  }

  resultado.innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}El promedio de los números ingresados es: <br>'${promedio}'<br>
  Los número que superan el promedio son: <br>'${mayoresAlPromedio.join(", ")}'</span>`;
  document.getElementById("form1").reset();
}

// Ejercicio 2
function capturar2() {

  function esMultiplo(num, divisor) {
    return num % divisor === 0;
  }

  function ultimoElemento(num) {
    return num[num.length - 1];
  }

  const numerosM = [];

  for (let i = 0; i < 10; i++) {
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numerosM.push(Number(numero));
        continuar = false;
      }
    }
  }

  let ultimoNumero = ultimoElemento(numerosM);

  const multiplos = [];

  for (let i = 0; i < numerosM.length; i++) {
    let num = numerosM[i];
    if (esMultiplo(num, ultimoNumero) && !multiplos.includes(num)) {
      multiplos.push(num);
    }
  }

  document.getElementById("resultado2").innerHTML = `[${numerosM.join(", ")}]<br>${generarEstiloResultado()}Múltiplos de ${ultimoNumero} ingresados: '${multiplos.join(", ")}'</span>`;
}

// Ejercicio 3
function capturar3() {
  const numeros = [];
  let resultado = mostrarResultados("resultado3");

  for (let i = 0; i < 10; i++) {
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numeros.push(Number(numero));
        continuar = false;
      }
    }
  }

  let maximo = valorMaximo(numeros);
  let contador = numeros.filter(num => num === maximo).length;

  resultado.innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}El valor máximo ingresado es: '${maximo}'<br>Cantidad de veces ingresado: '${contador}'</span>`;
}


// Ejercicio 4
function capturar4() {
  let sumaPares = 0;
  let numeros = [];

  for (let i = 0; i < 10; i++) {
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numeros.push(Number(numero));
        continuar = false;
      }
    }
  }

  const numerosSumados = [];
  for (let i = 0; i < numeros.length; i += 2) {
    let numero = numeros[i];
    sumaPares += numero;
    if (numero !== 0) {
      numerosSumados.push(numero);
    }
  }

  document.getElementById("resultado4").innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}La suma de los números en posiciones pares es: '${sumaPares}'<br>Los números que se suman son: '${numerosSumados.join(", ")}'</span>`;
}



// Ejercicio 5
function capturar5() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = (mostrarResultados("resultado5"));

  function invertirArray(array) {
    const arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${arrayInvertido.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 6
function capturar6() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado6");

  function rotarArrayDerecha(rotado) {
    rotado = [...rotado]; // crea una copia del arreglo para evitar que la salida de ambas funciones sean iguales y rotadas
    let ultimoElemento = rotado[rotado.length - 1];
    for (let i = rotado.length - 1; i >= 1; i--) {
      rotado[i] = rotado[i - 1];
    }
    rotado[0] = ultimoElemento;
    return rotado;
  }

  let miArray = cargarArray(limite, consulta);
  console.log(`Original: ${miArray}`);

  let arrayRotadoDerecha = rotarArrayDerecha(miArray);
  console.log(`Rotado: ${arrayRotadoDerecha}`);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${arrayRotadoDerecha.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 7
function capturar7() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado7");

  function invertirArray(array) {
    const arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  let palindromo = miArray.join("") === arrayInvertido.join("") ? "Si" : "No";

  resultado.innerHTML = `${generarEstiloResultado()}'${palindromo}'</span><br>${miArray.join("").toUpperCase()}<br>${generarEstiloResultado()}${arrayInvertido.join("").toUpperCase()}</span>`;
}

// Ejercicio 8
function capturar8() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado8");

  function obtenerCaracteresUnicos(array) {
    const caracteresUnicos = [];
    for (let i = 0; i < array.length; i++) {
      if (!caracteresUnicos.includes(array[i])) {
        caracteresUnicos.push(array[i]);
      }
    }
    return caracteresUnicos;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let caracteresUnicos = obtenerCaracteresUnicos(miArray);
  console.log("Caracteres únicos:", caracteresUnicos);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${caracteresUnicos.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 9
// Union de arrays
function capturar9Union() {
  setTimeout(function () {
    document.getElementById("union").style.display = "block";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);

  setTimeout(function () {
    let resultado = mostrarResultados("resultado9");

    function unionArray(array1, array2) {
      const union = [];
      for (let i = 0; i < array1.length; i++) {
        if (!union.includes(array1[i])) { //Si no está en unión (true)
          union.push(array1[i]);
        }
      }
      for (let i = 0; i < array2.length; i++) {
        if (!union.includes(array2[i])) {
          union.push(array2[i]);
        }
      }
      return union.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let union = unionArray(array1, array2).toUpperCase();

    resultado.innerHTML = `La UNION de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>
    ${generarEstiloResultado()}${union}</span>`;
  }, 200);
}


// Interseccion de arrays
function capturar9Interseccion() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "block";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);


  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      const miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function interseccionArray(array1, array2) {
      const interseccion = [];
      for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !interseccion.includes(array1[i])) {
          interseccion.push(array1[i]);
        }
      }
      return interseccion.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let interseccion = interseccionArray(array1, array2).toUpperCase();

    resultado.innerHTML = `La INTERSECCION de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${interseccion}</span>`;
  }, 200);
}

// Diferencia de arrays
function capturar9Diferencia() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "block";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);

  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      const miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function mostrarDiferencia(array1, array2) {
      const diferencia = [];
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
          diferencia.push(array1[i]);
        }
      }
      return diferencia.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let diferencia = mostrarDiferencia(array1, array2).toUpperCase();

    resultado.innerHTML = `La DIFERENCIA de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${diferencia}</span>`;
  }, 200);
}

// Diferencia Simétrica de arrays
function capturar9DiferenciaSim() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "block";
  }, 10);

  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      const miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function mostrarDiferenciaSimetrica(array1, array2) {
      const diferenciaSimetrica = [];
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
          diferenciaSimetrica.push(array1[i]);
        }
      }
      for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
          diferenciaSimetrica.push(array2[i]);
        }
      }
      return diferenciaSimetrica.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let diferenciaSimetrica = mostrarDiferenciaSimetrica(array1, array2).toUpperCase();

    resultado.innerHTML = `La DIFERENCIA SIMETRICA de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${diferenciaSimetrica}</span>`;
  }, 200);
}

// Ejercicio 10
function capturar10() {
  let inputCadenaC = document.getElementById("inputCadenaC").value;
  let subcadenaPares = "";
  let subcadenaImpares = "";
  let resultado = mostrarResultados("resultado10");

  for (let i = 0; i < inputCadenaC.length; i++) {
    if (i % 2 === 0) {
      subcadenaPares += inputCadenaC.charAt(i);
    } else {
      subcadenaImpares += inputCadenaC.charAt(i);
    }
  }

  resultado.innerHTML = `${generarEstiloResultado()}${subcadenaPares} ${subcadenaImpares}`;
}

// Ejercicio 11
function contarVocales(cadena) {
  let vocales = { A: 0, E: 0, I: 0, O: 0, U: 0 };
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i].toUpperCase();
    if (vocales.hasOwnProperty(caracter)) {
      vocales[caracter]++;
    }
  }
  return vocales;
}

function capturar11() {
  let cantVocales = document.getElementById("cantVocales").value;
  let vocales = contarVocales(cantVocales);
  let resultado = mostrarResultados("resultado11");
  let resultadoTexto = "";

  for (let vocal in vocales) {
    resultadoTexto += `${vocal}: '${vocales[vocal]}' `;
  }

  resultado.innerHTML = `${generarEstiloResultado()}Cantidad de vocales:<br>${resultadoTexto}`;
}//Iha101330

// Ejercicio 12
function capturar12() {
  let inputCantidadPalabras = document.getElementById("cantidadPalabras").value;
  let palabras = inputCantidadPalabras.split(" ");
  let resultado = mostrarResultados("resultado12");

  resultado.innerHTML = `${generarEstiloResultado()}La cantidad total de palabras es: ${palabras.length}`;
}

// Ejercicio 13
function capturar13() {
  let inputPromedioPalabra = document.getElementById("inputPromedioPalabra").value;
  let palabras = inputPromedioPalabra.split(" ");
  let totalCaracteres = 0;
  let resultado = mostrarResultados("resultado13");

  for (let i = 0; i < palabras.length; i++) {
    totalCaracteres += palabras[i].length;
  }

  let longitudPromedio = totalCaracteres / palabras.length;

  resultado.innerHTML = `${generarEstiloResultado()}La longitud promedio de las palabras es ${longitudPromedio.toFixed(2)}`
  document.getElementById("form13").reset();
}

// Ejercicio 14
function capturar14() {
  const inputFrase = document.getElementById("inputFrase").value.trim();
  const palabras = inputFrase.split(" ");
  let resultado = mostrarResultados("resultado14");

  const pares = [];

  for (let i = 0; i < palabras.length - 1; i++) {
    const primeraPalabra = palabras[i];
    const segundaPalabra = palabras[i + 1];
    const ultimaLetraPrimera = primeraPalabra[primeraPalabra.length - 1];
    const primeraLetraSegunda = segundaPalabra[0];

    if (ultimaLetraPrimera.toUpperCase() === primeraLetraSegunda.toUpperCase()) {
      pares.push(`${primeraPalabra} ${segundaPalabra}`);
    }
  }

  if (pares.length === 0) {
    resultado.innerHTML = `${generarEstiloResultado()}No se encontraron pares de palabras consecutivas.`;
  } else {
    resultado.innerHTML = `${inputFrase}<br>${generarEstiloResultado()}Pares de palabras consecutivas encontrados:<br>'${pares.join(", ")}'`;
  }
  document.getElementById("form14").reset();
}


// Ejercicio 15
function capturar15() {
  let inputCadena = document.querySelector("#inputCadena").value.toUpperCase();
  let ignorarEsp = prompt("¿Querés ignorar los espacios? S/N ").toUpperCase();

  let resultadoArray = splitCadena(inputCadena, ignorarEsp);
  let resultado = document.querySelector("#resultado15");

  resultado.innerHTML = `${generarEstiloResultado()}${resultadoArray}`;

  document.getElementById("form15").reset();
}

// Ejercicio 16

function capturar16() {
  let inputCadenaCesar = document.getElementById("inputCadenaCesar").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let resultado = mostrarResultados("resultado16");

  let cifrado = "";

  for (let i = 0; i < inputCadenaCesar.length; i++) {
    let letra = inputCadenaCesar[i];
    let codigo = letra.charCodeAt(0); //Para devolver cód Unicode

    if (codigo >= 65 && codigo <= 90) { // Letra mayúscula
      codigo = ((codigo - 65 + desplazamiento) % 26) + 65;
    } else if (codigo >= 97 && codigo <= 122) { // Letra minúscula
      codigo = ((codigo - 97 + desplazamiento) % 26) + 97;
    }

    cifrado += String.fromCharCode(codigo);
  }

  resultado.innerHTML = `Tu frase: '${inputCadenaCesar}<br>${generarEstiloResultado()}en Cifrado César: '${cifrado}'`;
  document.getElementById("form16").reset();
}

// Ejercicio 17
function capturar17() {
  function descifrarCadenaCesar(cadenaCifrada) {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let descifrado = "";

    // probamos los 25 desplazamientos posibles
    for (let i = 0; i < 26; i++) {
      let desplazamiento = i;
      let cadenaDescifrada = "";

      // desciframos la cadena con el desplazamiento actual
      for (let j = 0; j < cadenaCifrada.length; j++) {
        let letra = cadenaCifrada.charAt(j);

        if (letras.indexOf(letra.toUpperCase()) != -1) {
          let indice = letras.indexOf(letra.toUpperCase());
          let indiceDescifrado = (indice - desplazamiento + 26) % 26;

          if (letra === letra.toLowerCase()) {
            cadenaDescifrada += letras.charAt(indiceDescifrado).toLowerCase();
          } else {
            cadenaDescifrada += letras.charAt(indiceDescifrado);
          }
        } else {
          cadenaDescifrada += letra;
        }
      }

      let resultado = mostrarResultados("resultado17");
      resultado.innerHTML += `Desplazamiento ${desplazamiento}: ${cadenaDescifrada}<br>`;
    }
  }

  descifrarCadenaCesar("Bm nmtqkqbw. Pia xwlqlw lmakqnziz ti kilmvi.");
}


