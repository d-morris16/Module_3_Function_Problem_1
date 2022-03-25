//Write a JavaScript function that accepts a string as a paramenter and 
//find the longest word within the string 


/*
step 1: define a variable called longestWord
step 2: define a Javascript function that accepts a string as a paramter
step 3: split the string that is passed in, turning it into an array of individual words
step 4: start looping through the array of words with a forEach loop
step 5: check current word for length 
step 6: return the value of longestWord 


*/
const longestWord = "The first function problem in JavaScript";

function wordLengthCheck(passedInString) {
    console.log(passedInString)
}
 wordLengthCheck(longestWord);

const myArray = longestWord.split(" ");
console.log(myArray)


myArray.forEach(arrayWords => {
  console.log(arrayWords);
  let length = arrayWords.length;
  

  
  