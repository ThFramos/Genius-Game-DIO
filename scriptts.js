let order = [];
let clickedOrder = [];
let score = 0;
let nivel = 1;
//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const shuffeOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    ligthColor(elementColor, Number(i) + 1);
  }

}

const ligthColor = (element, number) => {
  number = number * 500;

  setTimeout(() => {
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, number - (nivel * 40))

  }, number - (nivel * 20));



}

let checkedOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    if (score < (10 * nivel)) {
      alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível.`);
    } else {
      nivel++;
      alert(`Pontuação: ${score}\n Você passou de fase! Fase ${nivel}!`);
    }
    nextLevel();
  }
}

let clicked = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkedOrder();
  }, 250);

}

let createColorElement = (color) => {
  if (color == 0) return green;
  if (color == 1) return red;
  if (color == 2) return yellow;
  if (color == 3) return blue;


}




let nextLevel = () => {
  score += 2;
  shuffeOrder();
}

let lose = () => {
  alert(`Pontuação: ${score}\n Você perdeu o Jogo. \n Clique no Ok para reiniciar.`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert(`Bora começar a jogatina!!!`)
  score = 0;

  nextLevel();
}

green.onclick = () => clicked(0);
red.onclick = () => clicked(1);
yellow.onclick = () => clicked(2);
blue.onclick = () => clicked(3);


playGame();

