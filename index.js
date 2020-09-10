function dwarfRollCall(dwarves) {
  var array = [];
  for (let i = 0; i < dwarves.length; i++) { // create a for loop to draw in an increment to pull from the program
     array.push(`${i+1}. ${dwarves[i]}`);
  } // insert the information using a push command
  return array.join(" ") + " ";
}

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
    for (let i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return array;
}


function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++) {
     if (words[i].length>4) {
        return true;
     }
  }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
   if (foods[i] === 'gouda' || foods[i] === 'cheddar' || foods[i] === 'camembert') {
   
   return foods[i];
  }
} 
 return 'no cheese!';
}


