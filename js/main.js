console.log('Booting up the game!');
console.log('Getting started.');

let En_title = "Tic-Tac-Toe";
let Fr_title = "Jeu de Morpion";



console.log(En_title, Fr_title, title);


function changeLanguage() {
	console.log('Button getting clicked!')
	let title = document.querySelector('#title');
	let choice = document.querySelector('#lang-Choice');
	if ( title.textContent === En_title ) {
		console.log('Translating to French...');
		title.textContent = Fr_title; 
		choice.textContent = 'Anglais / English';

		} else {
			console.log("Translating to English.");
			title.textContent = En_title;
			choice.textContent = 'Français';
			 }
}

