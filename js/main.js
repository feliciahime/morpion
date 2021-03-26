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


console.log("Let's start building divs.");
let box = document.querySelector(".MainContainer");
	let x = 1;
	console.log("It's Player ", x, "'s turn.");
	while (x < 10) {
		let d = document.createElement("div");
		d.setAttribute("class", "Tile");
		d.setAttribute("id", "b" + x );
		let tileID = 'playPiece("b' + x + '")';
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
		turn++;
	} else {
		console.log('You cannot play there.');

	}
	
	console.log(board);
	declareWinner();
	
}


function declareWinner() {
	(console.log(board['b1'], board['b2'], board['b3']));
	let winner = ((board['b1'] && board['b2'] && board['b3']) || (board['b4'] && board['b5'] && board['b6']) || (board['b7'] && board['b8'] && board['b9']) || (board['b1'] && board['b5'] && board['b9']) || (board['b3'] && board['b5'] && board['b7']) || (board['b1'] && board['b4'] && board['b7']) || (board['b2'] && board['b5'] && board['b8']) || (board['b3'] && board['b6'] && board['b9']))
	if ('magpie' === winner ) {
		console.log("Magpie wins!"); 
	} else if ('cross' === winner ) {
		console.log("Cross wins!");
	}
}
