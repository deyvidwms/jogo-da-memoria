"use strict";

const EMOJIS = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '☺️', '😊', '😇', '🙃', '😉', '😌', '😍', '😘',
  '😗', '😙', '😚', '😋', '😛', '😝', '😜', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '☹️',
  '😣', '😖', '😫', '😩', '😢', '😭', '😠', '😡', '😳', '😱', '😨', '😰', '😥', '😓', '😶',
  '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😴', '😪', '😵', '😷', '💩', '☠️', '👽', '🤖',
];

function novoCartao(texto, status) {
  return { texto, status };
}

function desvirar(cartoes) {
  for (const cartao of cartoes) {
    cartao.status = false;
  }
}

function virarCarta(cartoes, index) {
  let cartao = cartoes[index];
  if (cartao.status == "oculto") {
    cartao.status = "virando";
  } else {
    cartao.status = "oculto"
  }

  printarCartoes(cartoes);
}

function printarCartoes(cartoes) {
  let localCartoes = document.getElementById('localCartoes');
  localCartoes.innerHTML = "";

  cartoes.forEach((cartao, index) => {
    let div = document.createElement('div');
    div.id = `${index}`;

    div.onclick = () => { virarCarta(cartoes, index) };

    div.className = `cartao ${cartao.status}`;
    if (cartao.status != "oculto") {
      div.innerText = cartao.texto;
    }

    localCartoes.appendChild(div);

    if (cartao.status == "virando") {
      cartao.status = "mostrando";
    }
  });
}

let cartoes = EMOJIS.map((emoji) => novoCartao(emoji, "oculto"));
printarCartoes(cartoes);
