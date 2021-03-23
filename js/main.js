console.log('Booting up the game!');
let En_title = "Tic-Tac-Toe";
let Fr_title = "Jeu de Morpion";
let En_inst = "Click on a tile to play. The first player to set 3 tiles in a row wins.";
let Fr_inst = "Cliquez sur une tuile pour jouer. Le premier joueur a aligner 3 symboles identiques gagne la partie.";
let turn = 1;
console.log(En_title, Fr_title, En_inst, Fr_inst);
let player_one = []
let player_two = []
let board = {
    b1: null,
    b2: null,
    b3: null,
    b4: null,
    b5: null,
    b6: null,
    b7: null,
    b8: null,
    b9: null,
}


// turn taking fills board array with either magpie or fence; 
// then if board combo [ x === y === z], declare winner?
console.log("Let's start building divs.");
let box = document.querySelector(".MainContainer");
	let x = 1;
	console.log("It's Player ", x, "'s turn.");
	while (x < 10) {
		// console.log('this is still x: ', x);
		let d = document.createElement("div");
		d.setAttribute("class", "Tile");
		d.setAttribute("id", "b" + x );
		let tileID = 'playPiece("b' + x + '")';

		//		d.setAttribute("id", x.toString());
		//let tileID = 'playPiece(', x.toString() + "')";
		console.log(tileID);
		d.setAttribute("onClick", tileID);
		// console.log('Creating each div');
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
	console.log("id:", id)
	let choice = document.querySelector("#" + id);
	if ( null === board[id] ) {
		if ( turn % 2 == 0 ) {
			console.log("It's player 2's turn.");
			choice.innerHTML = '<img class="Piece" src="./img/magpie_piece.png" />';
			board[id] = 'magpie';
		} else {
			console.log("It's player 1's turn.")
			choice.innerHTML = '<img class="Piece" src="./img/cross_piece.png" />';
			board[id] = 'cross';
			
		}
	} else {
		console.log('You cannot play there.');

	}
	turn++;
	console.log(board);
	declareWinner();
	
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

function declareWinner() {
	(console.log(board['b1'], board['b2'], board['b3']));
	if ( board['b1'] && board['b2'] && board['b3'] === "magpie" ) {
		console.log('Magpie wins!');
	} else {
		console.log("No one has won yet: ", board); }
}

		// (('b1' && 'b2' && 'b3') || ('b4' && 'b5' && 'b6') || ('b7' && 'b8' && 'b9') || ('b1' && 'b5' && 'b9') || ('b3' && 'b5' && 'b7') || ('b1' && 'b4' && 'b7') || ('b2' && 'b5' && 'b8') || ('b3' && 'b6'&& 'b9')) ) {

	// } else if (player_two.includes (('cell1' && 'cell2' && 'cell3') || ('cell4' && 'cell5' && 'cell6') || ('cell7' && 'cell8' && 'cell9') || ('cell1' && 'cell5' && 'cell9') || ('cell3' && 'cell5' && 'cell7') || ('cell1' && 'cell4' && 'cell7') || ('cell2' && 'cell5' && 'cell8') || ('cell3' && 'cell6'&& 'cell9')) ) {	
	// 	console.log('Player 2 is the winner!');

// function declareWinner () {
// 	if player_one || player_two includes (('cell1', 'cell2', 'cell3') || ('cell4', 'cell5', 'cell6') || ('cell7', 'cell8', 'cell9') || ('cell1', 'cell5', 'cell9') || ('cell3', 'cell5', 'cell7') || ('cell1', 'cell4', 'cell7') || ('cell2', 'cell5', 'cell8') || ('cell3', 'cell6', 'cell9')) {
// 		console.log('We have a winner!');
// 	} else {
// 		console.log("Nobody has won yet.");
// 	}
// }