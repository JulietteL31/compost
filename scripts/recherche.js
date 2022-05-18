
// function FiltertResult(inputText)
// {
// 	let userFilter = inputText.value;
// 	let contenu = FilterContent(userFilter);
// 	let container = document.getElementById("filterResultContainer");
// 	container.innerHTML = contenu;
// }
// function AjouterTout() {
// 	let contenu = FilterContent("");
// 	let container = document.getElementById("filterResultContainer");
// 	container.innerHTML = contenu;
// }

function FilterContent(userFilter)
{
	// const jsonData = require(['./scripts/compostable.json']); 
	let listCompostable = data.liste;
    let userFilter = document.getElementById("inputText").value;

	// console.log("ici: " + JSON.stringify(jsonData))
	// let result = "";

	for (let i = 0; i < listCompostable.length; i++) {
		const item = listCompostable[i];
		// let test = item.titre.contains();

		if (item.titre.toLowerCase().includes(userFilter.toLowerCase()) || item.paragraph.toLowerCase().includes(userFilter.toLowerCase()))
		{
            let content = document.getElementById("filterResultContainer");
           
            let div = document.createElement("div");
            div.classList.add("ok");

            let cercle = document.createElement("div");
            cercle.classList.add("cercle");
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
            paragraphe.innerHTML = item.paragraph;
            div.appendChild(paragraphe);

            content.appendChild(div);

			// result += '<div class="ok">'
			// result += '	<div class="cercle">'
			// result += '		<img src="' + item.image + '" alt="' + item.altText + '" class="image-ok">'
			// result += '		<h3>' + item.titre + '</h3>'
			// result += '	</div>'
			// result += '	<p>' + item.paragraph + '</p>'
			// result += '</div>'
		}
        // else if (userFilter == "") {
        //     result = "";
        // }
	}
	// return result;
	// console.log(result);
}

FilterContent(userFilter);

const data = {
	"liste": [
		{
			"titre": "Les déchets animaux",
			"image": "./photos/chat.png",
			"altText": "dessin silhouette chat",
			"paragraph": "Déjections, litière minérale",
			"compostable": false,
		},
		{
			"image": "./photos/charbon.png",
			"altText": "photo cendre charbon de bois",
			"titre": "Le charbon et la poussière d'aspirateur",
			"paragraph": "Les cendres peuvent être répandues directement au sol (pas en trop grande quantité tout de même). Les poussières d'aspirateur sont à jeter car on ne peut pas garantir leur composition",
			"compostable": false,
		},
		{
			"image": "./photos/sac.png",
			"altText": "dessin sac plastique",
			"titre": "Les matériaux non-dégradables",
			"paragraph": "Sacs plastiques \"recyclables\", sachets de thé contenant du plastique, mégots de cigarette",
			"compostable": false,
		},
		{
			"image": "./photos/plante.png",
			"altText": "photo plante rampante",
			"titre": "Les plantes rampantes",
			"paragraph": "Liseron ou chiendent par exemple. Ces plantes sont capables de résister à des températures élevées et d'envahir les alentours du composteur",
			"compostable": false,
		},
		{
			"image": "./photos/resineux.png",
			"altText": "photo sapin",
			"titre": "Les résineux",
			"paragraph": "Ces plantes contiennent des inhibiteurs de croissance",
			"compostable": false,
		},
		{
			"image": "./photos/epluchures.png",
			"altText": "épluchures",
			"titre": "Les épluchures, les fruits/légumes pourris",
			"paragraph": "A découper en petits morceaux",
			"compostable": true,
		},
		{
			"image": "./photos/yaourt.png",
			"altText": "produits laitiers",
			"titre": "Tous les produits laitiers",
			"paragraph": "Yaourts et crèmes périmées, croutes de fromage",
			"compostable": true,
		},
		{
			"image": "./photos/oeuf.png",
			"altText": "coquilles d'oeuf",
			"titre": "Les coquilles d'oeuf",
			"paragraph": "<b>Ecrasées</b> (se décomposent plus facilement) ou <b>empilées</b> (servent de refuge aux insectes bons pour le compost)",
			"compostable": true,
		},
		{
			"image": "./photos/graines.png",
			"altText": "graines",
			"titre": "Les noix, noyaux et graines",
			"paragraph": "Tous les noyaux et graines sont compostables. Certaines graines résistent cependant au processus comme les graines de tomates ou de courges, et pousseront donc dans le bac",
			"compostable": true,
		},
		{
			"image": "./photos/poisson.png",
			"altText": "dessin de poisson",
			"titre": "La viande, le poisson",
			"paragraph": "En <b>petits morceaux</b>, ainsi que les os et les arrêtes",
			"compostable": true,
		},
		{
			"image": "./photos/pain2.png",
			"altText": "pain",
			"titre": "Le pain",
			"paragraph": "<b>Apport occasionnel, rare et en très petits morceaux</b>: le pain en décomposition tue les bonnes bactéries du compost !",
			"compostable": true,
		},
		{
			"image": "./photos/cafe.png",
			"altText": "marc de café",
			"titre": "Le marc de café",
			"paragraph": "En quantité raisonnable il joue le rôle d'activateur et constitue un bon apport en minéraux",
			"compostable": true,
		},
		{
			"image": "./photos/carton.png",
			"altText": "dessin carton d'emballage",
			"titre": "Le carton brut",
			"paragraph": "Penser à <b>découper avant de jeter</b>: boites d'oeufs, carton marron, sac kraft, rouleaux de PQ",
			"compostable": true,
		}
	]
}