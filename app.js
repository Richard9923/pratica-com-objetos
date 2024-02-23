const clientes = {
  interessesClientes: {},
};
console.log(clientes);
function cadastrandoCliente() {
  let inputUsuario = prompt("Qual o seu nome? ");
  let interesses = prompt("Qual o seu maior hobbie?");

  // Adicionando nome e interesses ao objeto clientes.nomesIdadesClientes
  clientes.interessesClientes[inputUsuario] = {
    nome: inputUsuario,
    interesses: interesses,
  };
}

programOn = true;

while (programOn == true) {
  cadastrandoCliente();
  console.log(clientes);
  let continuarEncerrar = prompt("encerrar/continuar");
  if (continuarEncerrar == "encerrar") {
    programOn = false;
  }
}
