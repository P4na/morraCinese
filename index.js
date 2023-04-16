const PROB_WIN = 0.33; //probabilità di vittoria settata a 33%
const NUM_TURNI = 10; //turni totali per giocare
let playerScore = 0;
let computerScore = 0;
let interfaccia = document.getElementById("interfaccia"); //div vuoto in cui poi inserisco il risultato
let risultato = document.getElementById("risultato"); //h2 dove scrivo il punteggio
let scelta = document.getElementById("scelta"); //scelta tra i vari input
let HTMLcompScore = document.getElementById("compScore"); //allinterno di risultato, inserisco numero
let HTMLplayerScore = document.getElementById("playerScore"); //allinterno di risultato, inserisco numero
HTMLcompScore.innerHTML = computerScore;
HTMLplayerScore.innerHTML = playerScore;

function startGame() {
  //attivo con conferma e inizia il gioco
  sceltaGiocatore = document.querySelector(
    "input[name = 'mossa']:checked"
  ).value; //prendo scelta giocatore poi inserisco interfaccia gioco
  interfaccia.innerHTML =
    "<div class='card mb-5' style='width: 15rem;'>\
                                <img src='' id='imgMossaComp' class='card-img-top' alt='...'>\
                                <div class='card-body'>\
                                    <h5 class='card-title'>Computer usa</h5>\
                                </div>\
                            </div>\
                            <div class='card' style='width: 15rem;'>\
                                <img src='' id='imgMossaPlayer' class='card-img-top' alt='...'>\
                                <div class='card-body'>\
                                    <h5 class='card-title'>Giocatore usa</h5>\
                                </div>\
                            </div>";

  imgMossaComp = document.getElementById("imgMossaComp"); //prendo le immagini del html inserito cosi da inserirle dopo
  imgMossaPlayer = document.getElementById("imgMossaPlayer");

  let sceltaComputer = Math.random(); //scelta del computer randomica tra 0 e 0.99

  if (sceltaComputer <= 0.2) {
    //determino scelta computer e inserisco immagine
    sceltaComputer = "carta";
    imgMossaComp.src = "images/carta.jpg";
  } else if (sceltaComputer > 0.2 && sceltaComputer <= 0.4) {
    sceltaComputer = "sasso";
    imgMossaComp.src = "images/sasso.jpg";
  } else if (sceltaComputer > 0.4 && sceltaComputer <= 0.6) {
    sceltaComputer = "forbice";
    imgMossaComp.src = "images/forbice.jpg";
  } else if (sceltaComputer > 0.6 && sceltaComputer <= 0.8) {
    sceltaComputer = "lizard";
    imgMossaComp.src = "images/lizard.jpg";
  } else if (sceltaComputer > 0.8) {
    sceltaComputer = "spock";
    imgMossaComp.src = "images/spock.jpg";
  }

  if (sceltaGiocatore == "carta") {
    //inserisco immagine carta giocatore
    imgMossaPlayer.src = "images/carta.jpg";
  } else if (sceltaGiocatore == "sasso") {
    imgMossaPlayer.src = "images/sasso.jpg";
  } else if (sceltaGiocatore == "forbice") {
    imgMossaPlayer.src = "images/forbice.jpg";
  } else if (sceltaGiocatore == "lizard") {
    imgMossaPlayer.src = "images/lizard.jpg";
  } else {
    imgMossaPlayer.src = "images/spock.jpg";
  }

  if (sceltaComputer == "carta" && sceltaGiocatore == "sasso") {
    //confronto vittoria sconfitta
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "carta" && sceltaGiocatore == "spock") {
    //confronto vittoria sconfitta
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "sasso" && sceltaGiocatore == "forbice") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "sasso" && sceltaGiocatore == "lizard") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "lizard" && sceltaGiocatore == "spock") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "lizard" && sceltaGiocatore == "carta") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "forbice" && sceltaGiocatore == "carta") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "forbice" && sceltaGiocatore == "lizard") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "spock" && sceltaGiocatore == "forbice") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == "spock" && sceltaGiocatore == "sasso") {
    risultato.innerHTML = "HAI PERSO";
    computerScore++;
  } else if (sceltaComputer == sceltaGiocatore) {
    risultato.innerHTML = "PAREGGIO!";
  } else {
    risultato.innerHTML = "HAI VINTO!";
    playerScore++;
  }

  HTMLcompScore.innerHTML = computerScore;
  HTMLplayerScore.innerHTML = playerScore;

  if (playerScore + computerScore >= 10) {
    continua = document.getElementById("restart");
    continua.innerHTML = "</br>PARTITA FINITA!";
  }
}
