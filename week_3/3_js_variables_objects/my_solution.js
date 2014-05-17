// I paired by myself on this challenge.




// Pseudocode
// 
// Assign a variable called secretNumber that equals a number
// Value of secretNumber should be 7
// Assign a variable called password that equals a string
// Value of password should be "just open the door"
// Assign a variable called allowedIn
//  Make it a boolean statement by setting value to true
//  Make it a boolean statement by changing value to false
// Assign varible called members
// Value of members should be an array
// Change first element in members array to John
// Add fourth element to members array
// Value of fourth element in memeber array should be Mary


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door"
var allowedIn = false
var members = ["John", 2, 3, "Mary"]




// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

//I did make my code very simple so there was not much left to do refactoring. I am a very early beginner with JavaScript, so keeping it simple made it easier for me. I understand when I learn more and my coding gets more intense, refractoring will be a major step to clean bug-free (well, atleast minimize bugs) coding.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// Can I just emphasize WOW! I am already behind in my work catching up on this week, however I didn't expect it to be so easy. I barely know any JavaScript and I am still learning it but when I went into the office hours today, something clicked. I had the tutor Laura help me and wow she made it so easy to understand. I could not believe I spent hours and hours figuring this out. I had questions on formating JavaScript because the syntax is very different, but I learned it as I went on reading about it. I need more practice with booleans and arrays because they are a bit more complicated. I learned how to use Node finally. I downloaded it and understood how it works and is used, I just need an example of how to use it. This is where Laura in her office hours showed me and I instantly understood it. I always get caught up in little details and being so organized, I have to know every little element before I move on. It hasn't been proven efficient so I am working on being better about understanding the concept instead of nit picking every little detail. I enjoyed this challenge once I understood how to do it. I learned that I havent found writing Psuedocode very fun. Its quite boring and tedious but I know it'll help me in the long run when I build mountains of code.
// 
// 
// 
// 


// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

