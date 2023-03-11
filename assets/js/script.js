window.onload = () => {
  init();
}

const init = () => {
  const EMOJIS = [
    '😀' , '😃' , '😄' , '😁' , '😆' , '😅' , '😂' , '☺️' , '😊' , '😇' , '🙃' , '😉' , '😌' , '😍' , '😘' ,
    '😗' , '😙' , '😚' , '😋' , '😛' , '😝' , '😜' , '😎' , '😏' , '😒' , '😞' , '😔' , '😟' , '😕' , '☹️' ,
    '😣' , '😖' , '😫' , '😩' , '😢' , '😭' , '😠' , '😡' , '😳' , '😱' , '😨' , '😰' , '😥' , '😓' , '😶' ,
    '😐' , '😑' , '😯' , '😦' , '😧' , '😮' , '😲' , '😴' , '😪' , '😵' , '😷' , '💩' , '☠️' , '👽' , '🤖' ,
  ];

  showCards(EMOJIS);
}

function setupCards(icons) {
  return icons.map((icon, index) => ({icon, index}));
}

const showCards = (emojis) => {
  const cardLocations = document.getElementById('cardLocations');
  
  const emojisWithId = setupCards(emojis);
  const duplicatedEmojis = [...emojisWithId, ...emojisWithId];

  const cards = shuffle(duplicatedEmojis).map(generateCard);
  
  cards.forEach(card => { cardLocations.innerHTML += card });
}

function shuffle(array) {
  return array.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const generateCard = (element) => {
  const reponseElm = `
    <div class="flip-card" data-index="${element.index}" data-active="on" onClick="handleClick(this)">
      <div class="flip-card--inner">
        <div class="flip-card--front">
          <img src="./assets/images/unknow.png" alt="Verso do cartão com uma interrogação">
        </div>
        <div class="flip-card--back">
          <p class="flip-card--icon">${element.icon}</p>
        </div>
      </div>
    </div>
  `;

  return reponseElm;
}

const handleClick = (element) => {
  const isActive = element.getAttribute('data-active') === "on";
  element.setAttribute('data-active' , isActive ? "off" : "on");

  // TODO: colocar verificação se é igual ao anterior

}