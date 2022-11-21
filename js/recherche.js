// import Liste from './data';

const Liste = [
    {
        "titre": "Les déchets animaux",
        "image": "./photos/compost-chat.png",
        "altText": "dessin silhouette chat",
        "paragraph": "Déjections, litière minérale",
        "compostable": false,
        "indication": "Je ne dois pas composter",
        "imgIndication": "./photos/croix.png"
    },
    {
        "image": "./photos/compost-cendre.png",
        "altText": "photo cendre charbon de bois",
        "titre": "Le charbon et la poussière d'aspirateur",
        "paragraph": "Les cendres peuvent être répandues directement au sol (pas en trop grande quantité tout de même). Les poussières d'aspirateur sont à jeter car on ne peut pas garantir leur composition",
        "compostable": false,
        "indication": "Je ne dois pas composter",
        "imgIndication": "./photos/croix.png"
    },
    {
        "image": "./photos/compost-sac.png",
        "altText": "dessin sac plastique",
        "titre": "Les matériaux non-dégradables",
        "paragraph": "Sacs plastiques \"recyclables\", sachets de thé contenant du plastique, mégots de cigarette",
        "compostable": false,
        "indication": "Je ne dois pas composter",
        "imgIndication": "./photos/croix.png"
    },
    {
        "image": "./photos/compost-plante.png",
        "altText": "photo plante rampante",
        "titre": "Les plantes rampantes",
        "paragraph": "Liseron ou chiendent par exemple. Ces plantes sont capables de résister à des températures élevées et d'envahir les alentours du composteur",
        "compostable": false,
        "indication": "Je ne dois pas composter",
        "imgIndication": "./photos/croix.png"
    },
    {
        "image": "./photos/compost-sapin.png",
        "altText": "photo sapin",
        "titre": "Les résineux",
        "paragraph": "Ces plantes contiennent des inhibiteurs de croissance",
        "compostable": false,
        "indication": "Je ne dois pas composter",
        "imgIndication": "./photos/croix.png"
    },
    {
        "image": "./photos/compost-legumes.png",
        "altText": "épluchures",
        "titre": "Les épluchures, les fruits/légumes pourris",
        "paragraph": "A découper en petits morceaux",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-fromage.png",
        "altText": "produits laitiers",
        "titre": "Tous les produits laitiers",
        "paragraph": "Yaourts et crèmes périmées, croutes de fromage",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-oeuf.png",
        "altText": "coquilles d'oeuf",
        "titre": "Les coquilles d'oeuf",
        "paragraph": "<b>Ecrasées</b> (se décomposent plus facilement) ou <b>empilées</b> (servent de refuge aux insectes bons pour le compost)",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-noix.png",
        "altText": "graines",
        "titre": "Les noix, noyaux et graines",
        "paragraph": "Tous les noyaux et graines sont compostables. Certaines graines résistent cependant au processus comme les graines de tomates ou de courges, et pousseront donc dans le bac",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-viande.png",
        "altText": "dessin de poisson",
        "titre": "La viande, le poisson",
        "paragraph": "En <b>petits morceaux</b>, ainsi que les os et les arrêtes",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-pain.png",
        "altText": "pain",
        "titre": "Le pain",
        "paragraph": "<b>Apport occasionnel, rare et en très petits morceaux</b>: le pain en décomposition tue les bonnes bactéries du compost !",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-cafe.png",
        "altText": "marc de café",
        "titre": "Le marc de café",
        "paragraph": "En quantité raisonnable il joue le rôle d'activateur et constitue un bon apport en minéraux",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    },
    {
        "image": "./photos/compost-carton.png",
        "altText": "dessin carton d'emballage",
        "titre": "Le carton brut",
        "paragraph": "Penser à <b>découper avant de jeter</b>: boites d'oeufs, carton marron, sac kraft, rouleaux de PQ",
        "compostable": true,
        "indication": "Je peux composter",
        "imgIndication": "./photos/coche.png"
    }
]

const inputSearch = document.getElementById("search");
const itemSearch = inputSearch.value;
// let value = itemSearch.toString();

function Content(itemSearch) {
    for (let i=0; i < Liste.length; i++) {
        
        const item = Liste[i];
        const inputSearch = document.getElementById("search");
        const itemSearch = inputSearch.value;

        console.log(itemSearch);

        const titreCompare = item.titre.toLocaleLowerCase();
        const parCompare = item.paragraph.toLocaleLowerCase();
        // const filter = itemSearch.toLowerCase
        // let content = document.getElementById("search-result");
        // content.innerHTML = "";

        if (itemSearch !== "" && titreCompare.includes(itemSearch.toLocaleLowerCase()) || parCompare.includes(itemSearch.toLocaleLowerCase())) {
            let content = document.getElementById("search-result");
           
            content.innerHTML = "";

            let div = document.createElement("div");
            div.classList.add("item");
            content.appendChild(div);

            let cercle = document.createElement("div");
            cercle.classList.add("itemContent");
            div.appendChild(cercle);

            let image = document.createElement("img");
            image.src = item.image;
            image.altTxt = item.altText;
            image.classList.add("image-ok");
            cercle.appendChild(image);

            let titre = document.createElement("h3");
            titre.innerHTML = item.titre;
            cercle.appendChild(titre);

            let paragraphe = document.createElement("p");
            paragraphe.classList.add("pContent");
            paragraphe.innerHTML = item.paragraph;
            div.appendChild(paragraphe);

            let indication = document.createElement("div");
            indication.classList.add("indication");
            content.appendChild(indication);

            let msgIndic = document.createElement("p");
            msgIndic.innerHTML = item.indication;
            indication.appendChild(msgIndic);

            let imgIndic = document.createElement("img");
            imgIndic.src = item.imgIndication;
            indication.appendChild(imgIndic);

        } 
        

    }
}


// function FiltertResult(filterInput)
// {
// 	let filter = filterInput.value;
// 	let contenu = FilterContent(filter);
// 	let container = document.getElementById("filterResultContainer");
// 	container.innerHTML = contenu;
// }

// function AjouterTout() {
// 	let contenu = FilterContent("");
// 	let container = document.getElementById("filterResultContainer");
// 	container.innerHTML = contenu;
// }


// function FilterContent(filter)
// {
// 	let listCompostable = data.liste;

// 	for (let i = 0; i < listCompostable.length; i++) {
// 		const item = listCompostable[i];

// 		if (item.titre.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || item.paragraph.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
// 		{
//             let content = document.getElementById("filterResultContainer");
           
//             let div = document.createElement("div");
//             div.classList.add("ok");
//             content.appendChild(div);

//             let cercle = document.createElement("div");
//             cercle.classList.add("cercle");
//             div.appendChild(cercle);

//             let image = document.createElement("img");
//             image.src = item.image;
//             image.altTxt = item.altText;
//             image.classList.add("image-ok");
//             cercle.appendChild(image);

//             let titre = document.createElement("h3");
//             titre.innerHTML = item.titre;
//             cercle.appendChild(titre);

//             let paragraphe = document.createElement("p");
//             paragraphe.innerHTML = item.paragraph;
//             div.appendChild(paragraphe);

//             console.log(div);
// 		} else {
//             let content = document.getElementById("filterResultContainer");
            
//             let erreur = document.createElement("p");
//             erreur.classList.add("msg-error");
//             erreur.innerHTML = "Nous n'avons malheureusement pas trouvé ce que vous recherchez...";
//             content.appendChild(erreur);

//             let lien = document.createElement("a");
//             lien.classList.add("lien-mail");
//             lien.href = "mailto:compostage.clos.saint.simon@gmail.com";
//             lien.innerHTML = "Vous avez une question ? Contactez-nous !";
//             content.appendChild(lien);
//         }
// 	}
// }

const bouton = document.getElementById("button-search");
bouton.addEventListener('click', Content);