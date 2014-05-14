// I worked on this challenge [by myself, with:]

I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Resume Mission
	// move right
	// move up x2
	// move right x2
	// move down
	// attack
		this.moveDown();
		this.moveDown();
		this.moveRight(); 
		this.moveUp();
		this.moveUp();
		this.moveRight();
		this.moveRight();
		this.moveDown();
		this.attackNearbyEnemy();

// Grab the Mushroom
	// move up
	// move right		
	// move left
	// move up
	// attack
		this.moveUp();
		this.moveRight();
		this.moveLeft();
		this.moveUp();
		this.attackNearbyEnemy();

// Taunt the Guard
	// move right
	// break door
	// move right
	// say something to get attention of the enemy
	// move left x2
	// say something so Phoebe will attack

	// move right
	// say something to tell Phoebe to follow
	// move right x2
	// move up
	// move right
	// say something to get attention of the enemy
	// move down
	// move right
	// move up
	// move right
		this.moveRight();
		this.bustDownDoor();
		this.moveRight();
		this.say("Hey there!");
		this.moveLeft();
		this.moveLeft();
		this.say("Attack!");

		this.moveRight();
		this.say("Follow me.");
		this.moveRight();
		this.moveRight();
		this.moveUp();
		this.moveRight();
		this.say("LOSERS!");
		this.moveDown();
		this.moveRight();
		this.moveUp();
		this.moveRight();

// It's a Trap
	// move down x2
	// say something to get attention from enemy
	// move up x2	
		this.moveDown();
		this.moveDown();
		this.say("Hey Ugly");
		this.moveUp();
		this.moveUp();

// Taunt
	// say something to get the attention of the enemy x4
		this.say("Hey loser");
		this.say("Yeah I'm talking to you loser");
		this.say("You are a big fat loser");
		this.say("you are ugly too");

// Cowardly Taunt
	// 	move to 50, 16
	// 	say something to get attention of the enemy
	// 	move back to 70, 10
		this.moveXY(50, 16);
		this.moveXY(63, 20);
		this.moveXY(70, 10);

		this.say("I can lure them in here.");
		
		this.moveXY(50, 16);
		this.say("Try and get me!");
		this.moveXY(70, 10);

// Commanding Followers
	// say something with "follow" to get soldiers to follow you
	// move to 60, 40
	// say something with attack to get soldiers to attack enemy
		this.moveXY(49, 66);
		this.moveXY(60, 63);
		this.moveXY(75, 63);
		this.say("Hail, friends!");

		this.say("Ready soldiers, follow me!");
		this.moveXY(60, 40);
		this.say("Attack Soldiers!");

// Mobile Artillery		
	// move artillery to 62, 26
	// artillery attack at 68, 53
	// artillery attack again at 66, 43
	// move artillery to 49, 35
	// artillery attack at 49, 64
	// artillery attack at 50, 59
		this.moveXY(30, 26);
		this.attackXY(46, 5);

		this.moveXY(62, 26);
		this.attackXY(68, 53);
		this.attackXY(66, 43);
		this.moveXY(49, 35);
		this.attackXY(49, 64);
		this.attackXY(50, 59);
 
// Reflection:
This was a pretty easy tutorial following commands. Luckily we had the commands written for us at the bottom to use. I didn't really face any problems because it was really easy. I know you had to pay attention to every little detail because the code combat told you instantly what was wrong with your javascript. I just had questions related to how javascript works and how to set it up. I learned that you have to be particular with how you code in javascript because the syntax is different. I am pretty confident on the learning the competencies of this section. I enjoyed seeing my code work in realtime and make changes. I just wish the program was a bit faster, it had to keep loading when I made any changes and then the character would work. I think a tedious part of it is writing the code over and over again. For example you had to write this.moveRight, this.moveRight. Is there a way to just make it this.moveRight (x2)?










