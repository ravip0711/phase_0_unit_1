// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ravi Patel
//  2.


// 0. "YOU SIGNED... WHO?!"

// 1. "Here they Come!"
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "That's your home! Are you too good for your home?!");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// 2. "TIME IS MONEY!"

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

//YOUR CODE HERE!

function Client(name, age, quote) {
   this.name = name,
   this.age = age,
   this.quote = quote,
   this.showQuote = function() {
     console.log(this.quote)
   };
 };
 
// 3. "SHOW 'EM OFF!"
var list = [];
list.push(adamSandler);
list.push(kristenBell);
list.push(jimCarrey);

list.forEach(function(entry) {
	console.log('Name: ' +entry.name+ '\n' + 
              'Age: '+entry.age+  '\n' + 
              'Quote: '+entry.quote+ '\n');
});

// 4. "But wait, there's more!"

adamSandler.showQuote();

// 5.  ** BONUS **


//  6.  Your Reflection:

//To start it off, my partner didn't end up showing up so it was just me and the tutor doing the challenge. I did sign up for the challenge early thinking it was going to be on the previous week's work however, it was on this week's JavaScript work. I wasn't familiar with Javascript at all so this was a learning experience. I did this GPS even before the email was sent out to look through the JavaScript activities before doing GPS. However, we made the best of it and I did learn how Javascript works and looks like. To be honest it was probably the first time I had seen it. As far as questions, I felt like I had all the questions in the world because it was brand new for me, but I tried my best to understand it. I did learn how to assign variables and learn about how JavaScript is similar to Ruby. I think it was very easy to follow through on what was going on, however the syntax is pretty hard to keep up with. I can logically say what would go next in the coding, but I wouldn't know exactly how to write it. It was hard to learn the concept because again I wasn't familiar with JavaScript at all. I did enjoy though learning about JavaScript and how its just another language similar to Ruby. I was confused on why we were learning it in the first place.
