console.log('Booting up the game!');
let En_title = "Tic-Tac-Toe";
let Fr_title = "Jeu de Morpion";
let En_inst = "Click on a tile to play. The first player to set 3 tiles in a row wins.";
let Fr_inst = "Cliquez sur une tuile pour jouer. Le premier joueur a aligner 3 symboles identiques gagne la partie.";
let turn = 1;
console.log(En_title, Fr_title, En_inst, Fr_inst);
let player_one = []
let player_two = []

console.log("Let's start building divs.");
let box = document.querySelector(".MainContainer");
	let x = 1;
	console.log('here is x: ', x);
	while (x < 10) {
		console.log('this is still x: ', x);
		let d = document.createElement("div");
		d.setAttribute("class", "Tile");
		d.setAttribute("id", "cell" + x );
		let tileID = 'playPiece("cell' + x + '")';
		console.log(tileID);
		d.setAttribute("onClick", tileID);
		console.log('Creating each div');
		box.appendChild(d);
		x++;
		}


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

function playPiece(id) {
	console.log('Function works!')
	console.log("id:", id)
	let choice = document.querySelector("#" + id);
	// let t = document.querySelector(choice);
	if ( turn % 2 == 0 ) {
		console.log("It's player two's turn. (even)")
		choice.innerHTML = '<img class="Piece" src="./img/magpie_piece.png" />';
		player_two.push(id)
	} else {
		console.log("It's player one's turn. (odd)")
		choice.innerHTML = '<img class="Piece" src="./img/cross_piece.png" />';
		player_one.push(id)
	}
	turn++;
	console.log('P1: ' + player_one + ' and ' + 'P2: ' + player_two);
	// declareWinner();
}



// do I need to set the playpiece up (onclick events) with the Div to get it to register in the proper one?

// let img = document.createElement('img'); 
//	img.src = '../img/magpie.png';
// document.querySelector('Tile').appendChild(img);
// console.log('Adding image!');
//set up a counter. for even, use X file. For odd, use Y file. 
// After each play, increase counter. (token++;)

// 1   2   3

// 4   5   6

// 7   8   9
	

// Possible wins: 123, 456, 789, 159, 357, 147, 258, 369
// Check if winning by does player one array contain x y z OR ... can it be a list?

function declareWinner() {
	if (player_one || player_two === (('cell1', 'cell2', 'cell3') || ('cell4', 'cell5', 'cell6') || ('cell7', 'cell8', 'cell9') || ('cell1', 'cell5', 'cell9') || ('cell3', 'cell5', 'cell7') || ('cell1', 'cell4', 'cell7') || ('cell2', 'cell5', 'cell8') || ('cell3', 'cell6', 'cell9')) ) {	
		console.log('We have a winner!');
	} else {
		console.log("Nobody has won yet.");
	}
}

// function declareWinner () {
// 	if player_one || player_two includes (('cell1', 'cell2', 'cell3') || ('cell4', 'cell5', 'cell6') || ('cell7', 'cell8', 'cell9') || ('cell1', 'cell5', 'cell9') || ('cell3', 'cell5', 'cell7') || ('cell1', 'cell4', 'cell7') || ('cell2', 'cell5', 'cell8') || ('cell3', 'cell6', 'cell9')) {
// 		console.log('We have a winner!');
// 	} else {
// 		console.log("Nobody has won yet.");
// 	}
// }