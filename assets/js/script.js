"use strict";

function inserirCartoes() {
  const EMOJIS = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '☺️', '😊', '😇', '🙃', '😉', '😌', '😍', '😘',
    '😗', '😙', '😚', '😋', '😛', '😝', '😜', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '☹️',
    '😣', '😖', '😫', '😩', '😢', '😭', '😠', '😡', '😳', '😱', '😨', '😰', '😥', '😓', '😶',
    '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😴', '😪', '😵', '😷', '💩', '☠️', '👽', '🤖',
  ];
  const LOCAL_CARTOES = document.getElementById('localCartoes');

  for (const emoji of EMOJIS) {
    var div = document.createElement('div');
    div.innerText = emoji;
    div.className = 'cartao';

    LOCAL_CARTOES.appendChild(div);
  }
}

inserirCartoes();
