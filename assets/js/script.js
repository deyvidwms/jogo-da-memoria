window.onload = () => {
  init();
}

const init = () => {
  const EMOJIS = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '☺️', '😊', '😇', '🙃', '😉', '😌', '😍', '😘',
    '😗', '😙', '😚', '😋', '😛', '😝', '😜', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '☹️',
    '😣', '😖', '😫', '😩', '😢', '😭', '😠', '😡', '😳', '😱', '😨', '😰', '😥', '😓', '😶',
    '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😴', '😪', '😵', '😷', '💩', '☠️', '👽', '🤖',
  ];

  showCards(EMOJIS);
}

const showCards = (emojis) => {
  const cardLocations = document.getElementById('cardLocations');
  emojis.forEach( element => cardLocations.innerHTML += generateCard(element) + generateCard(element));
}

const generateCard = (icon) => {
  const reponseElm = `
    <div class="flip-card" data-active="off" onClick="handleClick(this)">
      <div class="flip-card--inner">
        <div class="flip-card--front">
          <img src="./assets/images/unknow.png" alt="Imagem Interrogação">
        </div>
        <div class="flip-card--back">
          <p class="flip-card--icon">${icon}</p>
        </div>
      </div>
    </div>
  `;

  return reponseElm;
}

const handleClick = ( element ) => {
  const isActive = element.getAttribute('data-active') === "on"; 
  element.setAttribute('data-active', isActive ? "off" : "on");

  // TODO: colocar verificação se é igual ao anterior

}