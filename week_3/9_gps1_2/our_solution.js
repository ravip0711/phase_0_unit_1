// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ravi Patel
//  2.


// 1. "YOU SIGNED... WHO?!"




// 2. "Here they Come!"





// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

function Client(name, age, quote) {
   this.name = name,
   this.age = age,
   this.quote = quote,
   this.showQuote = function() {
     console.log(this.quote)
   };
 };
 
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "That's your home! Are you too good for your home?!");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var list = [];
list.push(adamSandler);
list.push(kristenBell);
list.push(jimCarrey);

list.forEach(function(entry) {
	console.log('Name: ' +entry.name+ '\n' + 
              'Age: '+entry.age+  '\n' + 
              'Quote: '+entry.quote+ '\n');
});

adamSandler.showQuote();



// 4. "SHOW 'EM OFF!"




// ** BONUS **


//  Your Reflection: