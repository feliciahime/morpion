console.log('Booting up the game!');
let En_title = "Tic-Tac-Toe";
let Fr_title = "Jeu de Morpion";
let En_inst = "Click on a tile to play. The first player to set 3 tiles in a row wins.";
let Fr_inst = "Cliquez sur une tuile pour jouer. Le premier joueur a aligner 3 symboles identiques gagne la partie.";
let turn = 1;

console.log("Let's start building divs.");
let box = document.querySelector(".MainContainer");
	let x = 1;
	console.log('here is x: ', x);
	while (x < 10) {
		console.log('this is still x: ', x);
		let d = document.createElement("div");
		d.setAttribute("class", "Tile");
		d.setAttribute("onClick", "playPiece()");
		console.log('Creating each div');
		box.appendChild(d);
		x++;
		}

player_one = {
	1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
}
player_two = {
	1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
}

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
	let t = document.querySelector(".Tile");
	if ( turn % 2 == 0 ) {
		console.log("It's player two's turn. (even)")
		t.innerHTML = '<img class="Piece" src="./img/magpie-piece.png" />';
	} else {
		console.log("It's player one's turn. (odd)")
		t.innerHTML = '<img class="Piece" src="./img/cross-piece.png" />';
	}
	turn++;

// do I need to set the playpiece up (onclick events) with the Div to get it to register in the proper one?

// let img = document.createElement('img'); 
//	img.src = '../img/magpie.png';
// document.querySelector('Tile').appendChild(img);
// console.log('Adding image!');
//set up a counter. for even, use X file. For odd, use Y file. 
// After each play, increase counter. (token++;)
	


}

