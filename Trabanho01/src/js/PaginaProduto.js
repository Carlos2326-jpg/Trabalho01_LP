const mapaCores = {
  preto: "../src/img/produto1.png",
  azul: "../src/img/produto2.png",
  verde: "../src/img/produto3.png",
  cinza: "../src/img/produto4.png",
  rosa: "../src/img/produto5.png",
};

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
}

function selecionarModelo(cor) {
  var res = document.getElementById("res");
  res.src = mapaCores[cor];

  document.querySelectorAll("#produtos button").forEach((btn) => {
    btn.classList.remove("miniatura-selecionada");
  });
  document
    .getElementById(`miniatura-${cor}`)
    .classList.add("miniatura-selecionada");
}

function atualizarTamanhoSelecionado(tamanho) {
  document.getElementById("tamanho-selecionado").textContent = tamanho;
}

window.onload = function () {
  document
    .getElementById("miniatura-preto")
    .classList.add("miniatura-selecionada");
};

window.onload = function () {
  document
    .getElementById("miniatura-preto")
    .classList.add("miniatura-selecionada");
};
