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
// Función Sumatoria
function promedio(numeros) {
  return (numeros.length == 0 ? 0 : sumatoria(numeros) / numeros.length);
}

function sumatoria(numeros) {
  let acu = 0;
  for (const numero of numeros) {
    acu += numero;
  }
  return acu;
}

function mostrarMayoresQue(numeros, valorASuperar) {
  let mayores = [];
  for (const numero of numeros) {
    if (numero > valorASuperar) {
      mayores.push(numero);
    }
  }
  return mayores;
}

// Ejercicio 1

function capturar1() {
  let numeros = [];
  let suma = 0;

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (isNaN(numero) || numero === null) {
      numeros.push(0);
    } else {
      numeros.push(numero);
    }
  }

  // Suma, promedio y mayores al promedio
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;

  let mayoresAlPromedio = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > promedio) {
      mayoresAlPromedio.push(numeros[i]);
    }
  }

  let resultado1 = document.getElementById("resultado1");
  resultado1.innerHTML = `[${numeros.join(", ")}]<br>
  El promedio de los números ingresados es: <br>'${promedio}'<br>
  Los número que superan el promedio son: <br>${mayoresAlPromedio.join(", ")}`;
  document.getElementById("form1").reset();
}

// Ejercicio 2

function capturar2() {

  function esMultiplo(num, divisor) {
    return num % divisor === 0;
  }

  function ultimoElemento(arr) {
    return arr[arr.length - 1];
  }

  let numerosM = [];
  for (let i = 0; i < 10; i++) {
    let numM = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numerosM.push(numM);
  }

  let ultimoNumero = ultimoElemento(numeroM);

  let multiplos = [];

  for (let i = 0; i < numerosM.length; i++) {
    if (esMultiplo(numerosM[i], ultimoNumero)) {
      multiplos.push(numerosM[i]);
    }
  }

  document.getElementById("resultado2").innerHTML = `[${numerosM}]<br>Los múltiplos de ${ultimoNumero} son: ${multiplos.join(", ")}`;
}

// Ejercicio 3
function valorMaximo(numeros) {
  return Math.max(...numeros);
}

function capturar3() {
  let numeros = [];

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (isNaN(numero) || numero === null) {
      numeros.push(0);
    } else {
      numeros.push(numero);
    }
  }

  let maximo = valorMaximo(numeros);
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === maximo) {
      contador++;
    }
  }

  document.getElementById("resultado3").innerHTML = `El valor máximo ingresado es: '${maximo}.'<br><br>El número máximo se ingresó '${contador}' veces<br>[${numeros.join(", ")}]`;
}