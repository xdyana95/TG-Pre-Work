let userName = 'Diana';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

let isSoccerFan  = true
if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!')
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'hello';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'hello';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let hungerLevel = 10
if (hungerLevel > 7) {
  console.log("Time to eat!")
  } else {
    console.log("We can eat later!")
  }

  let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}

let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log("Arms and legs are getting hairier");
}
  else if (moonPhase === 'mostly new') {
  console.log("Back on two feet");
} else {
  console.log("Invalid moon phase")
}

let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log("Arms and legs are getting hairier");
}
  else if (moonPhase === 'mostly new') {
  console.log("Back on two feet");
} else {
  console.log("Invalid moon phase")
}

let moonPhase = 'full';


switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log("Arms and legs are getting hairier");
    break;
  case 'mostly new':
    console.log("Back on two feet");
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

let isLocked = false;

isLocked? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'? console.log('I love that!') : console.log("I don't love that!");
