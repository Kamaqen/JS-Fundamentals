const player = {
	name: "Mario",
	level: 21,
	lifes: 3,
	size: "small",
	world: "Bowser's Fury"
};

function fireFlower() {
  console.log(`Fire ${this.name}!`);
};

function superMushroom() {
  console.log(`${this.name} went from small to super size.`);
};

function die(reason) {
  console.log(`${this.name} died because of ${reason}.`);
  this.lifes -= 1
};

fireFlower.call(player);
superMushroom.call(player);
die.call(player, "a fish eating him")