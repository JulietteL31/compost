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

//recup toutes les classes réponses
let investi = document.querySelectorAll('.investi');
let concerne = document.querySelectorAll('.concerne');
let minutieux = document.querySelectorAll('.minutieux');
let flemmard = document.querySelectorAll('.flemmard');

function CalculResult() {

    let investiTotal = "" ;
    let concerneTotal = "" ;
    let minutieuxTotal = "" ;
    let flemmardTotal = "" ;

    for(let i=0 ; i < investi.length ; i++) {
        if(investi[i].checked) {
            investiTotal = Number(investiTotal) + 1;
        } else {
            investiTotal = Number(investiTotal)
        }
    }

    for(let i=0 ; i < concerne.length ; i++) {
        if(concerne[i].checked) {
            concerneTotal = Number(concerneTotal) + 1;
        } else {
            concerneTotal = Number(concerneTotal)
        }
    }

    for(let i=0 ; i < minutieux.length ; i++) {
        if(minutieux[i].checked) {
            minutieuxTotal = Number(minutieuxTotal) + 1;
        } else {
            minutieuxTotal = Number(minutieuxTotal)
        }
    }

    for(let i=0 ; i < flemmard.length ; i++) {
        if(flemmard[i].checked) {
            flemmardTotal = Number(flemmardTotal) + 1;
        } else {
            flemmardTotal = Number(flemmardTotal)
        }
    }

    if(Number(investiTotal) >= Number(concerneTotal) && Number(investiTotal) >= Number(minutieuxTotal) && Number(investiTotal) >= Number(flemmardTotal)) {
        messagePerso.innerHTML = "<div class='profil'><h4>Le composteur investi</h4><img src='./photos/quizz/investi.png' class='imgresulttest' alt='dessin dune médaille'/><p>Tu t'impliques plus qu'un utilisateur lambda, tu es très régulier et très rigoureux dans tes apports au composteur, tu proposes souvent ton aide en cas de problème, tu es plein de bons conseils et n'as pas peur de prendre des initiatives. Tu es un atout précieux pour les référents qui savent qu'ils peuvent compter sur toi. Peut-être feras-tu bientôt partie de l'équipe ?</p></div>"
    } 
    if(Number(concerneTotal) > Number(investiTotal) && Number(concerneTotal) >= Number(minutieuxTotal) && Number(concerneTotal) >= Number(flemmardTotal)) {
        messagePerso.innerHTML = "<div class='profil'><h4>Le composteur concerné</h4><img src='./photos/quizz/concerne.png' class='imgresulttest' alt='dessin dune ampoule'/><p>Tu te sens concerné par le compostage et tu prends ta pratique très à coeur. Même en tant que 'simple' utilisateur, tu es conscient d'avoir un rôle à jouer dans le bon fonctionnement du composteur. Tu n'hésites pas à signaler les problèmes ou les dysfonctionnements. Ton sens de la communication est très important pour la viabilité du projet et nous t'en remercions !</p></div>"
    }
    if(Number(minutieuxTotal) > Number(investiTotal) && Number(minutieuxTotal) > Number(concerneTotal) && Number(minutieuxTotal) >= Number(flemmardTotal)) {
        messagePerso.innerHTML = "<div class='profil'><h4>Le composteur minutieux</h4><img src='./photos/quizz/minutieux.png' class='imgresulttest' alt='dessin dune loupe'/><p>Tu suis à la lettre tous les conseils d'utilisation du composteur. C'est très bien, mais attention : le compost est une matière vivante, elle évolue avec les saisons, et notre pratique se doit de s'y adapter. Prend garde aux schémas trop rigides qui laissent peu de place aux imprévus. Fais-toi confiance et prend plus d'initiatives !</p></div>"
    } 
    if(Number(flemmardTotal) > Number(investiTotal) && Number(flemmardTotal) > Number(concerneTotal) && Number(flemmardTotal) > Number(minutieuxTotal)) {
        messagePerso.innerHTML = "<div class='profil'><h4>Le composteur paresseux</h4><img src='./photos/quizz/paresseux.png' class='imgresulttest' alt='dessin dun chat qui dort'/><p>Tu es en accord avec le principe du compostage mais tu n'as pas envie de bousculer ton quotidien pour autant. C'est normal, chaque chose en son temps ! Petit à petit ton expérience te transformera, sans que tu ne t'en rendes compte, en utilisateur aguerri. Ne te décourage pas, nous sommes très contents de te compter parmi nous !</p></div>"
    }

    // if(investiTotal === concerneTotal || investiTotal === minutieuxTotal || investiTotal === flemmardTotal) {
    //     messagePerso.innerHTML = 'Profil investi'
    // } else if(concerneTotal === minutieuxTotal || concerneTotal === flemmardTotal) {
    //     messagePerso.innerHTML = 'Profil concerné'
    // } else if(minutieuxTotal === flemmardTotal) {
    //     messagePerso.innerHTML = 'Profil minutieux'
    // }

    console.log(investiTotal);
    console.log(flemmardTotal);
}

boutonForm.addEventListener('click', CalculResult);


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