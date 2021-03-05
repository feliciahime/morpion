console.log('Booting up the game!');
console.log('Getting started.');

let En_title = "Tic-Tac-Toe";
let Fr_title = "Jeu de Morpion";
let En_inst = "Click on a tile to play. The first player to set 3 tiles in a row wins.";
let Fr_inst = "Cliquez sur une tuile pour jouer. Le premier joueur a aligner 3 symboles identiques gagne la partie.";
let token = 0;

console.log(En_title, Fr_title, En_inst, Fr_inst);


function changeLanguage() {
	console.log('Button getting clicked!')
	let title = document.querySelector('#game-Title');
	let choice = document.querySelector('#game-Lang');
	let instructions = document.querySelector('#game-Instr');
	if ( title.textContent === En_title ) {
		console.log('Translating to French...');
		title.textContent = Fr_title; 
		choice.textContent = 'Anglais / English';
		instructions.textContent = Fr_inst;

		} else {
			console.log("Translating to English.");
			title.textContent = En_title;
			choice.textContent = 'Français';
			instructions.textContent = En_inst;
			 }
}

function playPiece() {
	console.log('Function works!')
// onClick="playPiece()";
// let t = document.querySelector('Tile');
// let play = document.createElement("img src="../img/magpie.png");
// 


// let img = document.createElement('img'); 
//	img.src = '../img/magpie.png';
// document.querySelector('Tile').appendChild(img);
// console.log('Adding image!');
//set up a counter. for even, use X file. For odd, use Y file. 
// After each play, increase counter. (token++;)
	


}

