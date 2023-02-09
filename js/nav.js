let bouton = document.getElementById('bouton');
let affiche = document.getElementById('display');
let nav = document.getElementById('menu');

bouton.addEventListener("click", () => {
  if(getComputedStyle(nav).display != "block"){      
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
})


let quizz = document.querySelector('.derouleQuizz');
let info = document.querySelector('.derouleInfos');

let sousQuizz = document.querySelector('.sousQuizz');
let sousInfos = document.querySelector('.sousInfos');

let flecheQuizz = document.querySelector('.flecheQuizz');
let flecheInfos = document.querySelector('.flecheInfos');


quizz.addEventListener("click", () => {
  if(getComputedStyle(sousQuizz).display != "block") {
    sousQuizz.style.display = "block";
    flecheQuizz.style.rotate = "90deg";
  } else {
    sousQuizz.style.display = "none";
    flecheQuizz.style.rotate = "0deg";
  }
})

info.addEventListener("click", () => {
  if(getComputedStyle(sousInfos).display != "block") {
    sousInfos.style.display = "block";
    flecheInfos.style.rotate = "90deg";
  } else {
    sousInfos.style.display = "none";
    flecheInfos.style.rotate = "0deg";
  }
})