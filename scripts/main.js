
function randomNum(min, max) {
	min = Math.floor(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}


let diceOne = {
	value: 1,
	roll : function(){
		this.value = randomNum(1, 6);
		return this.value;
	}
};
let diceTwo = {
	value: 1,
	roll : function(){
		this.value = randomNum(1, 6);
		return this.value;
	}
};

let button = document.body.querySelector("#roll-dice");



const loadDice = event =>{
	if(event) {
		event.preventDefault;
	}


	let containerNumberOne = document.body.querySelector("#div-1");
	const diceUno = diceOne.roll();


	let newClass = "img-0"+diceUno;

	let elm = document.getElementById("div-1");

	if(elm.className !== newClass){
		elm.className = newClass;
	}

	let containerNumberTwo = document.body.querySelector("#div-2");
	const diceDos = diceTwo.roll();

	let newClassTwo = "img-0"+diceDos;
	let elmTwo = document.getElementById("div-2");

	if(elmTwo.className !== newClassTwo){
		elmTwo.className = newClassTwo;
	}

};


//----------------------click event-----------------------
let rollDice = button.addEventListener("click", loadDice);

loadDice();
