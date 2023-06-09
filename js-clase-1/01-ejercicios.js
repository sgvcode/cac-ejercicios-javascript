//ejercicio 1
function capturarName() {
  let name = document.getElementById("name").value;
  let welcomeMsg = document.getElementById("welcome");
  let nameInput = document.getElementById("name");

  let regex = /^[a-zA-Z]+$/;

  if (name == "" || !regex.test(name)) {
    alert("Por favor, ingresa un nombre válido");
    document.getElementById("name").value="";
    nameInput.focus();
  } else {
    welcomeMsg.textContent = `Te damos la Bienvenida, ${name}`;
    nameInput.value = "";
    nameInput.focus();
  }
}

//ejercicio 2
function capturarInt() {
  let int = document.getElementById('int').value;
  let numberInt = document.getElementById("entero");
  let intInput = document.getElementById("int");

  numberInt.textContent = `El opuesto de ${int} es ${int * -1} y el inverso es ${(1 / int).toFixed(3)}`;
  intInput.value="";
  intInput.focus();
}

//ejercicio 3
function capturarNotas() {
  let trim1 = parseFloat(document.getElementById("trim1").value);
  let trim2 = parseFloat(document.getElementById("trim2").value);
  let trim3 = parseFloat(document.getElementById("trim3").value);
  let trim1Input = document.getElementById("trim1");
  let trim2Input = document.getElementById("trim2");
  let trim3Input = document.getElementById("trim3");

  let promedioNota = document.getElementById("promedioNota");

  if (isNaN(trim1) || trim1 < 0 || trim1 > 10) {
    alert("Ingresa una nota valida para el 1º Trim");
    document.getElementById("trim1").focus();
  } else if (isNaN(trim2) || trim2 < 0 || trim2 > 10) {
    alert("Ingresa una nota valida para el 2º Trim");
    document.getElementById("trim2").focus();
  } else if (isNaN(trim3) || trim3 < 0 || trim3 > 10) {
    alert("Ingresa una nota valida para el 3º Trim");
    document.getElementById("trim3").focus();
  } else {
    let promedio = (trim1 + trim2 + trim3) / 3;
    promedioNota.textContent = `El promedio anual de tus notas es: ${promedio.toFixed(2)}`;

    trim1Input.value="";
    trim2Input.value="";
    trim3Input.value="";
    trim1Input.focus();
  }
}

//ejercicio 4
function capturarWeeklySalary() {
  let hourSalary = parseInt(document.getElementById("hourSalary").value);
  let daylyWorkedHours = parseInt(document.getElementById("daylyWorkedHours").value);
  let weeklySalaryMsg = document.getElementById("weeklySalaryMsg");

  if (isNaN(hourSalary) || hourSalary <= 0) {
    alert("Ingresa tu salario por hora válido");
    document.getElementById("hourSalary").focus();
  } else if (isNaN(daylyWorkedHours) || daylyWorkedHours <= 0) {
    alert("Ingresa cantidad de horas trabajadas por semana");
    document.getElementById("daylyWorkedHours").focus();
  } else {
    let weeklySalary = hourSalary * daylyWorkedHours * 5.5;
    weeklySalaryMsg.textContent = `Tu salario semanal es de $${weeklySalary}`;
    document.getElementById("hourSalary").value = "";
    document.getElementById("daylyWorkedHours").value = "";
    document.getElementById("hourSalary").focus();
  }
}

//ejercicio 5
function capturarInverted() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let resultadoMsg = document.getElementById("resultadoMsg");
  let invertedMsg = document.getElementById("invertedMsg");

  if (a === "") {
    alert("Ingresa un valor numérico para a");
    document.getElementById("a").focus();
  } else if (b === "" || typeof (a) !== typeof (b)) {
    alert("Ingresa un valor numérico para b");
    document.getElementById("b").focus();
  } else {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("a").focus();
  }

  resultadoMsg.textContent = `Ingresaste los valores '${a}' y '${b}'`;
  [a, b] = [b, a];
  invertedMsg.textContent = `Los valores invertidos son '${a}' y '${b}'`;
}

//ejercicio 6

let salary = 14000;
let commision = 0.16;

function capturarSalary() {
  let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  let soldItems = parseFloat(document.getElementById("soldItems").value);
  let totalSalaryMsg = document.getElementById("totalSalaryMsg");

  if (itemPrice === "") {
    alert("Debes ingresar el precio del Artículo");
    document.getElementById("itemPrice").focus();
  } else if (soldItems === "" || soldItems < 0) {
    alert("Debes ingresar cantidad de artículos vendidos");
    document.getElementById("soldItems").focus();
  } else {
    let totalSalary = salary + (itemPrice * soldItems * commision);
    totalSalaryMsg.textContent = `Tu salario, sumadas las comisiones es de $ ${totalSalary.toFixed(3)}`;
    document.getElementById("itemPrice").value = "";
    document.getElementById("soldItems").value = "";
    document.getElementById("itemPrice").focus();
  }
}

//ejercicio 7
function capturarTerreno() {
  let ancho = document.getElementById("ancho").value;
  let largo = document.getElementById("largo").value;
  let valorPorM2 = document.getElementById("valorPorM2").value;
  let terrenoMsg = document.getElementById("terrenoMsg");

  if (ancho === "" || ancho < 1) {
    alert("Debes ingresar el ancho del terreno");
    document.getElementById(ancho).focus();
  } else if (largo === "" || largo < 1) {
    alert("Debes ingresar el largo del terreno");
    document.getElementById(largo).focus();
  } else if (valorPorM2 === "" || valorPorM2 < 0) {
    alert("Debes ingresar el precio x m2 del terreno");
    document.getElementById(valorPorM2).focus();
  } else {
    let sup = largo * ancho;
    let valorTotal = ancho * largo * valorPorM2;
    let metrosAlambreX3 = (2 * ancho + 2 * largo) * 3;
    terrenoMsg.textContent = `Valor del terreno de ${sup}m (${ancho}m x ${largo}m) = $${valorTotal}\nSe necesitan ${metrosAlambreX3}m de alambre para 3 pasadas de cerco`;
    document.getElementById("ancho").value = "";
    document.getElementById("largo").value = "";
    document.getElementById("valorPorM2").value = "";
    document.getElementById("ancho").focus();
  }
}

//ejercicio 8
function capturarNumeros() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let operacionesMsg = document.getElementById("operacionesMsg");

  if (isNaN(n1) || isNaN(n2)) {
    alert("Ingresa un número entero");
    if (isNaN(n1)) {
      document.getElementById("n1").focus();
    } else {
      document.getElementById("n2").focus();
    }
  } else {
    let suma = n1 + n2;
    let resta = n1 - n2;
    let mult = n1 * n2;
    let div;

    if (n2 === 0) {
      div = "No se puede dividir entre cero";
    } else {
      div = (n1 / n2).toFixed(2);
    }
    operacionesMsg.textContent = `Dados los números ${n1} y ${n2}, el resultado de la\nSuma = ${suma}\nResta = ${resta}\nProducto = ${mult}\nDivisión = ${div}`;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n1").focus();
  }
}

//ejercicio 9
function capturarAngulo() {
  let ang1 = parseInt(document.getElementById("ang1").value);
  let ang2 = parseInt(document.getElementById("ang2").value);
  let anguloMsg = document.getElementById("anguloMsg");
  let ang1Input = document.getElementById("ang1");
  let ang2Input = document.getElementById("ang2");

  if (isNaN(ang1) || isNaN(ang2)) {
    alert("Ingresa un valor para el campo");
    if (isNaN(ang1)) {
      document.getElementById("ang1").focus();
    } else {
      document.getElementById("ang2").focus();
    }
  } else if (ang1 + ang2 > 180) {
    alert("La suma de los ángulos no puede ser superior a 180 grados");
    ang1Input.value = "";
    ang2Input.value = "";
    ang1Input.focus();
  } else {
    let ang3 = 180 - (ang1 + ang2);
    anguloMsg.textContent = `Dado un triángulo de Ang1=${ang1}º y Ang2=${ang2}º, el Ang3=${ang3}º`;
    ang1Input.value = "";
    ang2Input.value = "";
    ang1Input.focus();
  }
}

//ejercicio 10

// function calcularAportes(event) {
//   event.preventDefault(); // Evita que el formulario se envíe

//   let form = event.target;
//   let inv1 = form.elements["inv1"].value;
//   let monto1 = parseInt(form.elements["monto1"].value);
//   let inv2 = form.elements["inv2"].value;
//   let monto2 = parseInt(form.elements["monto2"].value);
//   let inv3 = form.elements["inv3"].value;
//   let monto3 = parseInt(form.elements["monto3"].value);

//   let total = monto1 + monto2 + monto3;
//   let porcentaje1 = ((monto1 / total) * 100).toFixed(2);
//   let porcentaje2 = ((monto2 / total) * 100).toFixed(2);
//   let porcentaje3 = ((monto3 / total) * 100).toFixed(2);

//   let aportesMsg = document.getElementById("aportesMsg");
//   aportesMsg.textContent = `El monto total invertido es $${total}\n${inv1}: ${porcentaje1}%\n${inv2}: ${porcentaje2}%\n${inv3}: ${porcentaje3}%`;
// }

// let aportesForm = document.getElementById("aportesForm");
// aportesForm.addEventListener("submit", calcularAportes);

function capturarAportes() {
  let inv1 = document.getElementById("inv1").value;
  let monto1 = parseInt(document.getElementById("monto1").value);
  let inv2 = document.getElementById("inv2").value;
  let monto2 = parseInt(document.getElementById("monto2").value);
  let inv3 = document.getElementById("inv3").value;
  let monto3 = parseInt(document.getElementById("monto3").value);

  if (!inv1 || !inv2 || !inv3 || !monto1 || !monto2 || !monto3) {
    alert("Debes ingresar datos en el campo");
    if (!inv1) {
      document.getElementById("inv1").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    }
  } else {
    //Calcular total y porcentajes
    let total = monto1 + monto2 + monto3;
    let porcentaje1 = ((monto1 / total) * 100).toFixed(2);
    let porcentaje2 = ((monto2 / total) * 100).toFixed(2);
    let porcentaje3 = ((monto3 / total) * 100).toFixed(2);
    let aportesMsg = document.getElementById("aportesMsg");
    aportesMsg.textContent = `El monto total invertido es $${total}\n${inv1} ($${monto1}): ${porcentaje1}%\n${inv2} ($${monto2}): ${porcentaje2}%\n${inv3} ($${monto3}): ${porcentaje3}%`;

    //Limpiar datos
    document.getElementById("inv1").value = "";
    document.getElementById("inv2").value = "";
    document.getElementById("inv3").value = "";
    document.getElementById("monto1").value = "";
    document.getElementById("monto2").value = "";
    document.getElementById("monto3").value = "";
    document.getElementById("inv1").focus();
  }
}