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

  const difficulty = [10, 30, -1];

  sessionStorage.setItem('click', '0');
  sessionStorage.setItem('clickedItemId', -1);

  showCards(EMOJIS.slice(0, difficulty[0]));
}

const setupCards = (icons) => icons.map((icon, index) => ({icon, index}));

const showCards = (emojis) => {
  const cardLocations = document.getElementById('cardLocations');

  const emojisWithId = setupCards(emojis);
  const duplicatedEmojis = [...emojisWithId, ...emojisWithId];

  const cards = shuffle(duplicatedEmojis).map(generateCard);

  cards.forEach(card => { cardLocations.innerHTML += card });
}

const shuffle = (array) => array
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const generateCard = (element) => {
  const reponseElm = `
    <div class="flip-card" data-index="${element.index}" data-active="off" onClick="handleClick(this)">
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
  const elementId = element.getAttribute('data-index');
  const isActive = element.getAttribute('data-active') === "on";

  if (isActive) return;

  const clickCount = Number(sessionStorage.getItem('click'));

  element.setAttribute('data-active' , "on");

  const isFirstCardClick = clickCount === 0;
  if (isFirstCardClick) {
    sessionStorage.setItem('clickedItemId', elementId);
    sessionStorage.setItem('click', '1');
    return;
  }

  sessionStorage.setItem('click', '0');
  const sessionCardId = sessionStorage.getItem('clickedItemId');
  const cardLocations = document.getElementById('cardLocations');

  const cardsAreEqual = sessionCardId === elementId;
  if (!cardsAreEqual) {
    setTimeout(() => {
      for (let card of cardLocations.children) {
        if (sessionCardId == card.getAttribute('data-index')) {
          card.setAttribute('data-active' , "off");
        }
      }
      element.setAttribute('data-active' , "off");
    }, 1000);
    return;
  }

  for (let card of cardLocations.children) {
    if ( [elementId, sessionCardId].includes( card.getAttribute('data-index') ) ) {
      card.setAttribute('class', 'flip-card done');
      card.removeAttribute('data-active');
      card.removeAttribute('onClick');
    }  
  }

  for (let card of cardLocations.children) {
    if (card.getAttribute('data-active') === "off") {
      return;
    }
  }

  // Ganhou!
}
