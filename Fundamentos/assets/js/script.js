let nome = document.getElementById("nome");
let nomeOk = false;
let email = document.getElementById("email");
let emailOk = false;
let assunto = document.getElementById("assunto");
let assuntoOk = true;

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    txtEmail.innerHTML = "Email valido";
    txtEmail.style.color = "green";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "Email invalido";
    txtEmail.style.color = "red";
    emailOk = false;
  }
}

function validaAssunto() {
  if (assunto.value.length > 100) {
    txtAssunto.innerHTML = "Assunto grande demais";
    txtAssunto.style.color = "red";
    assuntoOk = false;
  } else {
    txtAssunto.innerHTML = "";
    assuntoOk = true;
  }
}

function validaEnviar() {
  if (assuntoOk == true && nomeOk == true && emailOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente para enviar!");
  }
}

function mapaZoom() {
  mapa.style.width = "600px";
  mapa.style.height = "350px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
