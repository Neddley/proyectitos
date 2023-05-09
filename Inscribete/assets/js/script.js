/* DIV1 */

const div1 = document.createElement("div");
div1.id = "div1";
document.body.appendChild(div1);

/* TITULO */

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerHTML = "¡Apresúrese!";
div1.appendChild(titulo);

/* PARRAFO */

const parrafo = document.createElement("p");
parrafo.id = "parrafo";
parrafo.innerHTML =
  "El plazo máximo para inscribirse es solo 2 días despues de la siguiente fecha:";
div1.appendChild(parrafo);

/* H2 FECHA */

const fecha = document.createElement("h2");
fecha.id = "fecha";
const calendario = new Date();
dia = calendario.getDate();
mes = calendario.getMonth() + 1;
ano = calendario.getFullYear();
str_dia = new String(dia);
if (str_dia.length == 1) dia = "0" + dia;
str_mes = new String(mes);
if (str_mes.length == 1) mes = "0" + mes;
fecha.innerHTML = dia + " / " + mes + " / " + ano;
div1.appendChild(fecha);

/* DIV2 */

const div2 = document.createElement("div");
div2.id = "div2";
document.body.appendChild(div2);

/* FORMULARIO */

const form = document.createElement("form");
form.id = "formulario";
div2.appendChild(form);

/* INPUTS */

const usuario = document.createElement("input");
usuario.id = "usuario";
usuario.type ="text"
usuario.placeholder = "Usuario"
form.appendChild(usuario)

const correo = document.createElement("input");
correo.id = "correo";
correo.type = "email"
correo.placeholder = "Correo"
form.appendChild(correo)

const contrasena = document.createElement("input");
contrasena.id = "contrasena";
contrasena.type= "password"
contrasena.placeholder = "Contraseña"
form.appendChild(contrasena)

const submit = document.createElement("input");
submit.id = "submit";
submit.type = "submit"
submit.value = "INSCRIBIRSE"
form.appendChild(submit)

/* PARRAFO LINK */

const div3 = document.createElement("div");
div3.id = "div3";
div2.appendChild(div3);

const plink = document.createElement("p");
plink.id = "p-link";
plink.innerHTML = "¿Tienes una cuenta?"
div3.appendChild(plink);

const link = document.createElement("a");
link.id = "link";
link.href = "#"
link.innerHTML = "Inicie sesión aquí"
div3.appendChild(link);