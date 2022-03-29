//Write a JavaScript function that accepts a string as a paramenter and 
//find the longest word within the string 


/*
step 1: define a variable called longestWord
step 2: define a Javascript function that accepts a string as a paramter
step 3: split the string that is passed in, turning it into an array of individual words
step 4: start looping through the array of words with a forEach loop
step 5: compare current word for length with next word for length
step 6: replace current word with longest word and repeat until unable
step 6: return the value of longestWord 

*/ 

function checkLongestWord(longestWord) {
  const arrayOfWords = longestWord.split(" ");
  let position = "";
  
  arrayOfWords.forEach(word => {
    if(word.length > position.length){
      position = word; 
    }
  });
  return position;
}
console.log(checkLongestWord("I finally figured out how to code this problem."));