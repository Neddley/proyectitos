const reloj = document.getElementById("hora");
const calendario = document.getElementById("fecha");
const vuelo = document.getElementById("num-vuelo");
const terminal = document.getElementById("num-terminal");

function relleno() {
  document.getElementById("titulo").innerHTML =
    "Bienvenido a la plataforma Eport";
  document.getElementById("info").innerHTML =
    "Aqui podrá encontrar la información de los vuelos más reciente en nuestro aeropuerto.";
  document.getElementById("titulo-hora").innerHTML = "Hora:";
  document.getElementById("titulo-fecha").innerHTML = "Fecha:";
  document.getElementById("titulo-vuelo").innerHTML = "El vuelo más proximo";
}
function mueveReloj() {
  momentoActual = new Date();
  dia = momentoActual.getDate();
  mes = momentoActual.getMonth() + 1;
  ano = momentoActual.getFullYear();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();

  str_dia = new String(dia);
  if (str_dia.length == 1) dia = "0" + dia;

  str_mes = new String(mes);
  if (str_mes.length == 1) mes = "0" + mes;

  str_hora = new String(hora);
  if (str_hora.length == 1) hora = "0" + hora;

  str_minuto = new String(minuto);
  if (str_minuto.length == 1) minuto = "0" + minuto;

  horaImprimible = hora + " : " + minuto;
  fechaImprimible = dia + " / " + mes + " / " + ano;

  reloj.innerHTML = horaImprimible;
  calendario.innerHTML = fechaImprimible;

  setTimeout("mueveReloj()", 1000);
}

function vueloNum() {
  let numero = Math.floor(Math.random() * 2000);
  vueloImprimible = "Numero de vuelo: " + numero;

  vuelo.innerHTML = vueloImprimible;
}

function terminalNum() {
  let numero = Math.floor(Math.random() * 100);
  terminalImprimible = "Numero de terminal: " + numero;

  terminal.innerHTML = terminalImprimible;
}

alert(
  "Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma."
);
