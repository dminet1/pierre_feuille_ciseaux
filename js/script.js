var resultat = document.getElementById('resultat');
var choixVous = document.getElementById('choixVous');
var choixOrdi = document.getElementById('choixOrdi');
var compteurs = document.getElementById('compteurs')
var boutonReset = document.getElementById("boutonReset");
var choix;
var vous;
var ordi;
var n;
var wins=0;
var losses=0;
var equalities=0;

function Votrechoix(v){
  vous=v;
  //alert("votre choix = " + v);
  choice(v);
  choixVous.innerHTML = "Votre choix : " + choix;
  Choixordi();
}

function Choixordi(){
  ordi=Math.round(Math.random()*2)+1;
  //alert("choix ordi = " + ordi);
  choice(ordi);
  choixOrdi.innerHTML = "Choix de l'ordi : " + choix;
  compareChoix();
}

function compareChoix(){
  if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2)) {
    resultat.innerHTML = "BRAVO ! VOUS AVEZ GAGNE !";
    wins ++;
  } else if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2)) {
    resultat.innerHTML = "VOUS AVEZ PERDU !";
    losses ++;
  } else {
    resultat.innerHTML = "EGALITE ! A REFAIRE !";
    equalities ++;
  }
  compteurs.innerHTML = "Gagné : " + wins + " Perdu : " + losses + " Egalité : " + equalities;
}

function choice(n) {
  //alert("choix");
  if (n == 1) {
    choix = "PIERRE";
  } else if (n == 2) {
    choix = "FEUILLE";
  } else if (n == 3) {
    choix = "CISEAUX";
  }
}

function reset() {
  document.location.reload(true);
}
