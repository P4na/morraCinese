/*

creare il gioco con carta sasso forbici
una volta che funziona cambiamo la logica e evitare molti if else usando gli switch case

ragionamo in seguito come aggiungere le mosse lizard e spok
ragioniamo in seguito come rendere il game con 3 livelli(molto dopo)

questo renderà il gioco scalabile, cioè che può essere migliorato e potenziato con funzionalità in maniera semplice
utilizzando sempre un numero contenuto di risorse

REGOLE GIOCO:
io faccio una mossa, 
computer esegue una mossa
confronto delle mosse e di seguito viene assegnato il punto
dopo 10 lanci si decreta il vincitore


FORBICI batte CARTA
SASSO batte FORBICI
CARTA batte SASSO
ogni mossa confrontata con la stessa(SASSO contro SASSO) da pari.

consiglio possibilità di usare una soglia per rendere il tutto più semplice

consiglio estetico quando viene eseguita la mossa vengono modificate due immagini

*/

const PROB_WIN = 0.33; //probabilità di vittoria settata a 33%
const NUM_TURNI = 10; //turni totali per giocare
let playerScore = 0; 
let computerScore = 0;
let interfaccia = document.getElementById("interfaccia"); //div vuoto in cui poi inserisco il risultato
let risultato = document.getElementById("risultato"); //h2 dove scrivo il punteggio
let scelta = document.getElementById("scelta"); //scelta tra i vari input
let HTMLcompScore = document.getElementById("compScore"); //allinterno di risultato, inserisco numero
let HTMLplayerScore = document.getElementById("playerScore");//allinterno di risultato, inserisco numero
HTMLcompScore.innerHTML = computerScore;
HTMLplayerScore.innerHTML = playerScore;


function startGame() { //attivo con conferma e inizia il gioco
    sceltaGiocatore = document.querySelector("input[name = 'mossa']:checked").value; //prendo scelta giocatore poi inserisco interfaccia gioco
    interfaccia.innerHTML = "<div class='card mb-5' style='width: 15rem;'>\
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

    if (sceltaComputer<= 0.33) { //determino scelta computer e inserisco immagine
        sceltaComputer = "carta";
        imgMossaComp.src = "images/carta.jpg";
    } else if (sceltaComputer > 0.33 && sceltaComputer<= 0.66){
        sceltaComputer = "sasso";
        imgMossaComp.src = "images/sasso.jpg";
    } else if (sceltaComputer > 0.66){
        sceltaComputer = "forbice";
        imgMossaComp.src = "images/forbice.jpg";
    }

    if (sceltaGiocatore == "carta"){ //inserisco immagine carta giocatore
        imgMossaPlayer.src = "/images/carta.jpg";
    } else if (sceltaGiocatore == "sasso"){
        imgMossaPlayer.src = "/images/sasso.jpg";
    } else {
        imgMossaPlayer.src = "/images/forbice.jpg";
    }

    if (sceltaComputer == "carta" && sceltaGiocatore == "sasso"){ //confronto vittoria sconfitta
        risultato.innerHTML = "HAI PERSO";
        computerScore ++;
    }
    else if (sceltaComputer == "sasso" && sceltaGiocatore == "forbice"){
        risultato.innerHTML = "HAI PERSO";
        computerScore ++;
    }
    else if (sceltaComputer == "forbice" && sceltaGiocatore == "carta"){
        risultato.innerHTML = "HAI PERSO";
        computerScore ++;
    } else if (sceltaComputer == sceltaGiocatore) {
        risultato.innerHTML = "PAREGGIO!";
    } else {
        risultato.innerHTML = "HAI VINTO!";
        playerScore ++;
    }

    HTMLcompScore.innerHTML = computerScore;
    HTMLplayerScore.innerHTML = playerScore;

    if (playerScore + computerScore >= 10) {
        continua = document.getElementById("restart");
        continua.innerHTML = "</br>PARTITA FINITA!"
    }
}
