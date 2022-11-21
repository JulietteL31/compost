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