const vacationSpots = ['Japan', 'Korea', 'China'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

let vacationSpots = ['Japan', 'Korea', 'China'];
for (let vacationSpotIndex =0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let vacationSpots = ['Japan', 'Korea', 'China'];
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let myPlaces = ['japan', 'korea', 'china'];
let friendPlaces = ['japan', 'europe', 'australia'];
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex ++) {

  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex ++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log('Match: ' + myPlaces[myPlacesIndex]);
    }
  }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Diamond';
while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}
console.log("found a spade");


let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}
