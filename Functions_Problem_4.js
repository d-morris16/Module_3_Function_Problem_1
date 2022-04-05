
//Write a JavaScript function that iterates the integers from 1 to 100. But for multiples 
//of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
//For numbers that are multiples of both three and five print "FizzBuzz".

/*
step 1: Create a function that loops and prints from 1 to 100 and prints "Fizz", "Buzz",
and "FizzBuzz" for multipes of 3, 5, and 3 & 5 respectfully.
step 2: Defines arrays for multiples of 3, 5, and both 3 & 5.
step 3: Define a variable that will print the values from the iterations
step 3: Create a loop that will interate the integers from 1 to 100. Where if the number
is any multiple, it will print "Fizz", "Buzz", and "FizzBuzz" in place of those numbers.
*/



function numOfIterations(num){
  const multOf3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 
                   54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];
  const multOf5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
                  90, 95, 100];
  const multOfBoth = [15, 30, 45, 60, 75, 90];
  
  
  for(let num = 0; num <= 100; num++){
    console.log(num);
      if(num = multOf3) {
        console.log("Fizz");
      }
  }

}

console.log(numOfIterations())