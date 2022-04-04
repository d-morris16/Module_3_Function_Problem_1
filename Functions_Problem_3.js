//Write a JavaScript function that accepts two arguments, a string and a letter 
//and the function will count the number of occurrences of the 
//specified letter within the string. 

/*
step 1: Define a JavaScript function that accepts two arguments, a string and a letter 
step 2: Define a variable called counter that counts the letter's occurances in 
the string and set the value to 0.
step 3: split the passed in string into an array of individual letters, store the value
into a variable called arrayOfLetters. 
step 4: Loop through the array of letters.
step 5: Check if the current letter in the loop is thhe same letter as specified
step 6: increase the variable counter by one.
step 7: return the value to counter.
*/

function numOfOccurances (wordString, letterString){
  let counter = 0;
  const arrayOfLetters = wordString.toLowerCase().split("");
  
  arrayOfLetters.forEach(letter => {
    if(arrayOfLetters.includes(letterString)){
      counter += 1;
    }
  });
  
  return counter;
  
}


console.log(numOfOccurances("The times that flies all the time", "e"));