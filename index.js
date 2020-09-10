function dwarfRollCall(dwarves) {
  var array = [];
  var end = dwarves.length / 2
  for (let i = 0; i < end; i++) { // create a for loop to draw in an increment to pull from the program
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

function wordsWithB (words) {
  var array = [];
  for (let i = 0; i < words.length; i++) {
  if (words[i].charAt(0) === 'b') {
     array.push(`${words[i]}`);
   }
  }
       return array;
    
  // call an array of words, "apple" "bacon" "banana" return only words with letter /b/
}

//

