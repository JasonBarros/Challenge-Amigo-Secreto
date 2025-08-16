//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo"); // id conforme index.html
  const nome = input.value.trim();

  // Validação da entrada
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adicionar ao array
  amigos.push(nome);

  // Atualizar lista exibida
  atualizarLista();

  // Limpar campo de entrada
  input.value = "";
  
}

// Função para atualizar a lista de amigos
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa lista antes de atualizar

  // Percorrer array e criar elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo cadastrado.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    alert(`Amigo sorteado: ${amigos[indiceAleatorio]}`);
}