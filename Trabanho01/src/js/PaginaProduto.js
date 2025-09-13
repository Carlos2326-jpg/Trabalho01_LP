const mapaCores = {
  preto: "../src/img/produto1.png",
  azul: "../src/img/produto2.png",
  verde: "../src/img/produto3.png",
  cinza: "../src/img/produto4.png",
  rosa: "../src/img/produto5.png",
};

// Preços para cada cor
const precosPorCor = {
  preto: 59.9,
  azul: 64.9,
  verde: 62.9,
  cinza: 59.9,
  rosa: 67.9,
};

const quantidadesPorTamanho = {
  P: { preto: 30, azul: 25, verde: 40, cinza: 35, rosa: 20 },
  M: { preto: 50, azul: 45, verde: 171, cinza: 171, rosa: 40 },
  G: { preto: 40, azul: 35, verde: 50, cinza: 45, rosa: 171 },
  GG: { preto: 20, azul: 171, verde: 30, cinza: 25, rosa: 10 },
};

let corAtual = "preto";
let tamanhoAtual = "M";

function TrocarProduto(cor) {
  var res = document.getElementById("res");
  res.src = mapaCores[cor];

  document.getElementById(`modelo-${cor}`).checked = true;

  document.querySelectorAll("#produtos button").forEach((btn) => {
    btn.classList.remove("miniatura-selecionada");
  });
  document
    .getElementById(`miniatura-${cor}`)
    .classList.add("miniatura-selecionada");

  corAtual = cor;

  atualizarPreco();

  atualizarQuantidadeDisponivel();
}

function selecionarModelo(cor) {
  TrocarProduto(cor);
}

function atualizarTamanhoSelecionado(tamanho) {
  document.getElementById("tamanho-selecionado").textContent = tamanho;

  tamanhoAtual = tamanho;

  atualizarQuantidadeDisponivel();
}

function atualizarPreco() {
  const precoElemento = document.getElementById("preco");
  const preco = precosPorCor[corAtual];
  precoElemento.textContent = `R$ ${preco.toFixed(2).replace(".", ",")}`;
}

function atualizarQuantidadeDisponivel() {
  const quantidadeEstoque = document.getElementById("quantidade-estoque");
  const quantidadeInput = document.getElementById("quantidade");

  const quantidadeDisponivel = quantidadesPorTamanho[tamanhoAtual][corAtual];

  quantidadeEstoque.textContent = quantidadeDisponivel;

  quantidadeInput.max = quantidadeDisponivel;

  if (parseInt(quantidadeInput.value) > quantidadeDisponivel) {
    quantidadeInput.value = quantidadeDisponivel;
  }
}

window.onload = function () {
  document
    .getElementById("miniatura-preto")
    .classList.add("miniatura-selecionada");

  document.getElementById("tamanho-m").checked = true;

  atualizarPreco();
  atualizarQuantidadeDisponivel();
};
