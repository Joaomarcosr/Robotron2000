const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca) {
  estatisticas.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}

const robo = document.querySelector(".robo");
const altera = document.querySelectorAll("[data-ajustecor]");

const srcCores = [
  "img/Robotron2000-Amarelo.png",
  "img/Robotron2000-Azul.png",
  "img/Robotron2000-Branco.png",
  "img/Robotron2000-Preto.png",
  "img/Robotron2000-Rosa.png",
  "img/Robotron2000-Vermelho.png",
];
const corRobo = ["amarelo", "azul", "branco", "preto", "rosa", "vermelho"];

altera.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    alteraCor(
      evento.target.dataset.ajustecor,
      robo.dataset.cor,
      evento.target.parentNode
    );
  });
});

function alteraCor(operacao, corAtual, itemPai) {
  let posicaoCor = corRobo.indexOf(corAtual);
  let visor = itemPai.querySelector(".controle-contador-cor");

  if (posicaoCor < corRobo.length - 1 && operacao == "+") {
    robo.attributes.src.value = srcCores[posicaoCor + 1];
    robo.dataset.cor = corRobo[posicaoCor + 1];
    visor.value = corRobo[posicaoCor + 1];
  } else if (posicaoCor >= corRobo.length - 1 && operacao == "+") {
    robo.attributes.src.value = srcCores[0];
    robo.dataset.cor = corRobo[0];
    visor.value = corRobo[0];
  }

  if (posicaoCor > 0 && operacao == "-") {
    robo.attributes.src.value = srcCores[posicaoCor - 1];
    robo.dataset.cor = corRobo[posicaoCor - 1];
    visor.value = corRobo[posicaoCor - 1];
  } else if (posicaoCor <= 0 && operacao == "-") {
    robo.attributes.src.value = srcCores[corRobo.length - 1];
    robo.dataset.cor = corRobo[corRobo.length - 1];
    visor.value = corRobo[corRobo.length - 1];
  }
}
