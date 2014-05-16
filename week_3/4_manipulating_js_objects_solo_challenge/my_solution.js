// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

variable adam

2. Give adam a name property with the value "Adam".

assign variable to name with the property of adam

3. Add a spouse property to terah and assign it the value of adam.

add spouse property assigned to adam

4. Change the value of the terah weight property to 125.

Change value of terah weight to 125

5. Remove the eyeColor property from terah.

Delete eyeColor property

6. Add a spouse property to adam and assign it the value of terah.

Add spouse property to adam value to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

Add children property to terah

***This is where I got stuck and didn't undertand how to write it in Javascript***

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

Add value of carson to terah children property

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

Add value of carter to terah children property

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

Add value of colton property to terah children property    

11. Add a children property to adam and assign it the value of terah children.

Add children property to adam
Assign it to value of terah children


*/

// __________________________________________
// Write your code below.

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: adam
  children: "",
}

var adam = {
  name: "Adam",
  spouse: terah,

}





// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I understood the basics of the Javascript. What I did not understand is assigning a property to a property and giving it a value. I am sure its quite easy, I just don't have a full comprehension of it. I also don't understand what it means to test something. I know you put the JavaScript in the console, but what do you do with it then? I did look at some videos on Javascript on Yotube, but I would get side tracked and would leave less time to do the assignments. I did learn how to assign variables in JavaScript and the basic layout when writing JavaScript. I enjoyed the parts that were easy because I knew the answer to them. I felt some of the other stuff was frustrating because I just didn't get it. Its hard to work on doing something when you just don't get it.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)