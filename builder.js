// Objet de configuration
var restaurants = [
	{
		filename: 'la-palette-du-gout.html',
		nom: 'La palette du goût',
		menu: [
			{
				nom: 'Entrées',
				items: [
					{ nom: 'Courgette', prix: 8}
				]
			}, {
				nom: 'Plats',
				items: [
					{ nom: 'Frites', prix: 15}
				]
			}, {
				nom: 'Desserts',
				items: [
					{ nom: 'Cookies', prix: 4}
				]
			}
		]
	}
];

// Récupération du package File System
const fs = require('fs');

// Récupération du package de moteur de template
const { TwingEnvironment, TwingLoaderArray } = require('twing');

// Récupération du template index.html à dupliquer
const templateContent = fs.readFileSync('index.html', 'utf8');

// Configuration du moteur de template
let loader = new TwingLoaderArray({
    'index.twig': templateContent
});
let twing = new TwingEnvironment(loader);

// Génération des versions pour chaque restaurant
for (const restaurant of restaurants) {
	twing.render('index.twig', restaurant).then(output => {
		console.log(output);
		// Sauvegarde de la version générée
	    fs.writeFileSync(restaurant.filename, output);
	});
}
