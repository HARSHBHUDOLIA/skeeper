let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let res = document.getElementById('res');
let players = document.querySelectorAll('span');
let pscore1 = 0;
let pscore2 = 0;
let gameOver = false;
let wscore = 5;
let numInp=document.querySelector('input[type="number"]');

// Code for reset

res.addEventListener("click", function() {



  if (pscore1 === wscore) {

    players[0].classList.remove('winner');
  } else {

    if(pscore2 === wscore) {
      players[1].classList.remove('winner');

    }
  }
  pscore1 = 0;
  players[0].innerHTML = 0;
  pscore2 = 0;
  players[1].innerHTML = 0;
  gameOver = false;
})

p1.addEventListener("click", () => {
  if (!gameOver) {
    players[0].innerHTML = ++pscore1;
    if (pscore1 === wscore) {
      players[0].classList.add('winner');
      gameOver = true;
    }

  }


})
p2.addEventListener("click", () => {
  if (!gameOver) {
    players[1].innerHTML = ++pscore2;
    if (pscore2 === wscore) {
      players[1].classList.add('winner');
      gameOver = true;
    }
  }

})

numInp.addEventListener("change",function(){
  players[2].innerHTML=numInp.value;
  wscore=Number(numInp.value);
})
