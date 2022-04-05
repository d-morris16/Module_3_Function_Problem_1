
//Write a JavaScript function that iterates the integers from 1 to 100. But for multiples 
//of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
//For numbers that are multiples of both three and five print "FizzBuzz".

/*
step 1: Create a function that loops and prints from 1 to 100 and prints "Fizz", "Buzz",
and "FizzBuzz" for multipes of 3, 5, and 3 & 5 respectfully.
step 2: Define a for loop that will loop from 0 to 100 with conditionals. 
step 3: Define an empty string variable called "word".
step 4: Create two conditionals for the loop that will print "Fizz" and "Buzz"
step 5: Console.log the result 
*/



function fizzBuzz() {
  for(i = 0; i <= 100; i++) {
    let word = "";
    
    if(i % 3 === 0){
      word += "Fizz";
    }
    
    if(i % 5 === 0){
      word += "Buzz";
    }
    
    console.log(i, word);
  }
  
}


fizzBuzz();