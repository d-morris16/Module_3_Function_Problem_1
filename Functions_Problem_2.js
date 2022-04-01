//Write a JavaScript function that accepts a string as a parameter 
//and counts the number of vowels within the string


/*
step 1: Define a JavaSript function that accepts a string as a parameter
step 2: split the passed in string, turn it into an array of individual characters, 
store the value into a variable called arrayOfLetters
step 3: Define a variable called numberOfVowels and set the initial value to be equal to zero
step 4: Define a variable that defines vowels, an array of vowels
step 5: Loop through the array of letters
step 6: Check if the current letter is a vowel or not
step 7: Increase the count variable by 1 for every letter that's a vowel
step 8: Return the count of vowels

*/


function vowelCounter (passedString){
  const arrayOfLetters = passedString.toLowerCase().split("");
  let numberOfVowels = 0;
  
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  
  arrayOfLetters.forEach(letter =>{
    if(arrayOfVowels.includes(letter)){
      numberOfVowels += 1;
    }
  
  });

  return numberOfVowels;
}

console.log(vowelCounter("Another attempt at writing this code to count vowels"));