
//récup bouton pour validation du quizz
let boutonForm = document.getElementById('boutonForm');

//récup div pour affichage du total de bonnes réponses
let divTotal = document.getElementById('total');

//append paragraphe pour total
let afficheTotal = document.querySelector('.afficheTotal');

//append div pour message personnalisé en fonction du résultat
let message = document.createElement('div');
divTotal.appendChild(message);

let messagePerso = document.createElement('p');
messagePerso.className = 'msgPerso';
message.appendChild(messagePerso);

//récup boutons radio choix correct dans le DOM
let choixCorrect = document.querySelectorAll('.correct');

//récup boutons checkbox question 10
let correctRep101 = document.querySelector('.correct101');
let correctRep102 = document.querySelector('.correct102');

//récup boutons checkbox question 5
let correctRep51 = document.querySelector('.correctRep51');
let correctRep52 = document.querySelector('.correctRep52');
let correctRep53 = document.querySelector('.correctRep53');

//récup label bonnes réponses dans DOM pour modifier leur couleur au clic
let repVert1 = document.querySelector('.repVert1');
let repVert2 = document.querySelector('.repVert2');
let repVert3 = document.querySelector('.repVert3');
let repVert4 = document.querySelector('.repVert4');
let repVert5 = document.querySelector('.repVert5');
let repVert52 = document.querySelector('.repVert52');
let repVert53 = document.querySelector('.repVert53');
let repVert6 = document.querySelector('.repVert6');
let repVert7 = document.querySelector('.repVert7');
let repVert8 = document.querySelector('.repVert8');
let repVert9 = document.querySelector('.repVert9');
let repVert10 = document.querySelector('.repVert10');
let repVert101 = document.querySelector('.repVert101');

//récup bonnes réponses dans le DOM
let bonneRep = document.querySelector('.bonneRep1');
let bonneRep2 = document.querySelector('.bonneRep2');
let bonneRep3 = document.querySelector('.bonneRep3');
let bonneRep4 = document.querySelector('.bonneRep4');
let bonneRep5 = document.querySelector('.bonneRep5');
let bonneRep6 = document.querySelector('.bonneRep6');
let bonneRep7 = document.querySelector('.bonneRep7');
let bonneRep8 = document.querySelector('.bonneRep8');
let bonneRep9 = document.querySelector('.bonneRep9');
let bonneRep10 = document.querySelector('.bonneRep10');

function ValidForm() {

    afficheTotal.innerHTML = "";

    let total = "";

    for(let i = 0; i < choixCorrect.length; i++) {
        console.log('salut');
        if(choixCorrect[i].checked) {
            total = Number(total) + 1;
        } else {
            total = Number(total);
        }
    }

    console.log(correctRep101.checked)
    if(correctRep101.checked && correctRep102.checked) {
        total = Number(total) + 1;
    } else {
        totel = Number(total);
    }

    if(correctRep51.checked && correctRep52.checked && correctRep53.checked) {
        total = Number(total) + 1;
    } else {
        totel = Number(total);
    }

    if(document.quizzBetes.dechets.selectedIndex == 3) {
        total = Number(total) + 1
    } else {
        total = Number(total);
    }

    if(total <= 0) {
        total = 0;
    }

    afficheTotal.innerHTML = `Total : ${total} / 10`;
    divTotal.appendChild(afficheTotal);
    
     if(getComputedStyle(bonneRep).display != 'block'){
        bonneRep.style.display = 'block';
        bonneRep2.style.display = 'block';
        bonneRep3.style.display = 'block';
        bonneRep4.style.display = 'block';
        bonneRep5.style.display = 'block';
        bonneRep6.style.display = 'block';
        bonneRep7.style.display = 'block';
        bonneRep8.style.display = 'block';
        bonneRep9.style.display = 'block';
        bonneRep10.style.display = 'block';
        repVert1.style.color = 'green';
        repVert2.style.color = 'green';
        repVert3.style.color = 'green';
        repVert4.style.color = 'green';
        repVert5.style.color = 'green';
        repVert52.style.color = 'green';
        repVert53.style.color = 'green';
        repVert6.style.color = 'green';
        repVert7.style.color = 'green';
        repVert8.style.color = 'green';
        repVert9.style.color = 'green';
        repVert10.style.color = 'green';
        repVert101.style.color = 'green';
     }

     if(total === 10) {
         messagePerso.innerHTML = "Félicitations ! Le compostage n'a plus de secret pour toi !"
     } else if(total > 5 && total < 10) {
         messagePerso.innerHTML = "Bravo ! Très beau score malgré quelques petites erreurs, continue comme ça !"
     } else if(total === 5) {
         messagePerso.innerHTML = "Tout juste la moyenne, encore quelques efforts pour améliorer tes connaissances, n'hésite pas à consulter les pages 'ce que je peux composter', 'ce que je ne peux pas composter' et 'les bons gestes à adopter' !"
     } else if(total >= 1 && total < 5) {
         messagePerso.innerHTML = "Moins de la moyenne, dommage... Consulte le site pour en apprendre davantage sur l'art et la manière de composter et améliore ton score !"
     } else if(total === 0) {
         messagePerso.innerHTML = "Que s'est-il passé ?! N'hésite pas à visiter le site et à retenter ta chance plus tard pour améliorer ton score !"
     }

}

boutonForm.addEventListener('click', ValidForm);


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
