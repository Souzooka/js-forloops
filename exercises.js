/* 1) Ticket Generator
Write a for-loop that will iterate through 20 numbers (starting at 1 and ending at 20) and console.log the following message:
"Now serving 1."
"Now serving 2."
"Now serving 3."
.
.
.
"Now serving 20."
*/

var i = null;

for (i=1;i<21;i++) {
	console.log("Ticket Generator: Now Serving " + i);
}

/* 2) Pop Charts
Write a for-loop that will iterate through the topFive array below and console.log the following message:
"This week's chart buster is: 'Closer.'"
"This week's chart buster is: 'Starboy.'"
"This week's chart buster is: 'I Feel It Coming.'"
"This week's chart buster is: 'Let Me Love You.'"
"This week's chart buster is: '24K Magic.'"
*/

var topFive = ["Closer", "Starboy", "I Feel It Coming", "Let Me Love You", "24K Magic"];

for (i=0;i<topFive.length;i++) {
	console.log("This week's chat buster is: " + "'" + topFive[i] + ".'");
}

/* 3) Dead Presidents
Declare a variable named `presidents` and assign it to an array containing the following Presidents: Washington, Adams, Jefferson, Madison and Monroe.
 
Write a for-loop that will iterate through this array and within the for-loop console.log the following:
"The value at 0 is Washington." 
"The value at 1 is Adams." 
"The value at 2 is "Jefferson."
"The value at 3 is "Madison."
"The value at 4 is Monroe."

Next, console.log the length of the array.

3-A) Create a function named leaders which will take in a parameter: `person`.
   @param Datatype: String `person`
 
This function will iterate through the person parameter and console.log the following message for each item in the array:

"President person was a great leader."
*/

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for (i=0;i<presidents.length;i++) {
	console.log("The value at " + i + " is " + presidents[i] + ".");
}

function leaders(person) {
	for (i=0;i<presidents.length;i++)
	console.log("President " + person[i] + " was a great leader.");
}

leaders(presidents);


/* 4) Line Number
Declare a variable named `stringOfNumbers` and assign its value to an empty string. 

Write a for-loop that concatenates a Number value into that string on each iteration, starting at `10` and continuing up to and including `20`. Console.log your result. It should read "1011121314151617181920"

4-A) Create a function called `appendToString` and have it produce the same result as above. Console.log your results.
*/

var stringOfNumbers = "";

for (i=10;i<21;i++) {
	stringOfNumbers += (i + " ");
}

console.log(stringOfNumbers);

function appendToString() {
	var newStringOfNumbers = "";
	for (i=10;i<21;i++) {
		newStringOfNumbers += (i + " ");
	}
	return newStringOfNumbers;
}

console.log(appendToString());

/* 5) Even Stevens
Declare a variable named `evenNumArr` and assign its value to an empty array. 

Write a for-loop that will push even numbers to the `evenNumArr` array. We want to push 50 even even numbers starting from 0.
Console.log your results.
*/

var evenNumArr = [];

for (i=0;evenNumArr.length<=50;i++) {
	if (i % 2 === 0) {
		evenNumArr.push(i);
	}
}

console.log(evenNumArr);


/* 6) Up the Odds
Declare a variable named `oddSum` and assign it to the Number value 0.

Write a for-loop that will sum up odd numbers to the `oddSum` variable. We want to add 50 odd numbers starting from 1.
Console.log your results.
*/
  
var oddNumbersCount = 0;
var sum = 0;

for (i=1;oddNumbersCount<=50;i++) {
	if (i % 2 === 1) {
		oddNumbersCount++;
		sum += i;
	}
}

console.log(sum);


/* 7) Opps There It is
Declare a variable named `oopsArray` and assign its to the following array: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`.
Note that every odd index value in `oopsArray` is currently `undefined`. Using a for-loop, add the string `'nope'` to every odd index. Console.log your result. It should look like this:

[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]
*/

var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];

for (i=0;i<oopsArray.length;i++) {
	if (i % 2 === 1) {
		oopsArray[i] = "nope";
	}
}

console.log(oopsArray);


/* 8) Is It There Opps
Using a for-loop, iterate through the Array stored at `oopsArray` backwards. Console.log your result. It should look like this:

['what', 'nope', 'for', 'nope', 'down', 'nope', 'turn']
*/

/*var reverseOopsArray = [];

for (i=1;i<oopsArray.length+1;i++) {
	reverseOopsArray.push(oopsArray[oopsArray.length-i]);
}*/

var reverseOopsArray = [];

for (i=oopsArray.length;i>0;i--) {
	reverseOopsArray.push(oopsArray[i-1]);
}

console.log(reverseOopsArray);

/* 9) Siesta Time
Declare a variable named `napSchedule` and assign its value to the following array: `[false, false, true, false, true, true]`

Next, write a function named `nap`. This function takes in a single parameter: `schedule`

   @param Datatype: Array `schedule`

Inside of this function write a for-loop that will iterate through the `napSchedule` array and console.log the message: `ZzZzZzZz` if the schedule is `true`, otherwise the it will console.log the message: `Gotta get coding!` if the schedule is `false`.
*/

var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {
	for (i=0;i<napSchedule.length;i++) {
		if (schedule[i]) {
			console.log("ZzZzZzZz");
		}
		else {
			console.log("Gotta get coding!");
		}
	}
}

nap(napSchedule);

/* 10) Copy Pasta
Declare a variable named `valuesArray` and assign it's value to be an array: `[99, 66, 829, 1941, 8, 76]`.

Write a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. 

   @param Datatype: Array `originArray`
   @param Datatype: Array `destinationArray`

Inside of this function write a for-loop that will iterate through the contents of the `originArray` and pushes each element of that array into `destinationArray`. Console.log your result.
*/

var valuesArray = [99, 66, 829, 1941, 8, 76];
var copiedValuesArray = [];

function copyArray(originArray,destinationArray) {
	for (i=0;i<originArray.length;i++) {
		destinationArray.push(valuesArray[i]);
	}
	return destinationArray;
}

console.log(copyArray(valuesArray,copiedValuesArray));

/*Final Boss*/

/* 11) Go Long
Declare a variable named `topQuote` and assign it to a String value of your favorite one line quote.
Write a function that will iterate through the string value and return the longest word in that quote. Console.log your result.
*/

var topQuote = "I reject your reality and substitute my own.";

function longestWord(quote) {

	var wordLength = 0; // Placeholder for letter incrementer.
	var longestWord = ""; // Placeholder for longest word.

	for (i=0;i<topQuote.length;i++) { // Loop until we hit the end of the quote.
		if (quote.charAt(i) === " ") { // If the character being read is a space.
			if (wordLength > longestWord.length) { // If wordLength variable is greater than (not greater than or equal to, so the first of the longest words will be returned) the previous longest word's length, the next line of code is run.
				longestWord = quote.slice(i-wordLength, i); // Sets newest longest word using slice().
			}
			wordLength = 0; // Sets letter count to 0 at the end of each word.
		}
		else {
			wordLength++; // Increments the letter count for each word.
		}
	}
	return longestWord; // Returns the longest word.
}

console.log(longestWord(topQuote));

/* 12) Puppet Master
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`
Write a function named `generateArrayOfStrings` which takes a single argument `storage`. This function will return a new Array with only `String` values inside of it.

   @param Datatype: Array `storage`
   @return Datatype: Array

*/

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];

function generateArrayOfStrings(storage) {
	var newArray = [];
	for (i=0;i<storage.length;i++) {
		if (typeof miscStorage[i] === "string") {
			newArray.push(storage[i]);
		}
	}
	return newArray;
}

console.log(generateArrayOfStrings(miscStorage));

/* 13) All Grown Up 
Write a function that will capitalize the first letter in each word in the phrase below. The function will console.log the message: "I've Lived A Life That's Full. I've Traveled Each and Every Highway. But More, Much More Than This. I Did It My Way."  
*/

var myWay = "i've lived a life that's full, i've traveled each and every highway. but more, much more than this. i did it my way.";

function capFirstLetter(string) {
	var lastCharacter = " ";
	var newString = "";
	for (i=0;i<string.length;i++) {
		if (lastCharacter === " ") {
			newString += string.charAt(i).toUpperCase();
		}
		else {
			newString += string.charAt(i);
		}
		lastCharacter = string.charAt(i);
	}
	return newString;
}

console.log(capFirstLetter(myWay));

/* 14) Back to School
Declare a variable named `currentCohort` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).
Write a function named `graduateAndSetNewClass`, which takes a single argument called `cohort`.

   @param Datatype: Array `cohort`

The function will iterate through the `cohort` argument and check each student's `enrolled` property.
If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
Console.log your result.
*/

var currentCohort = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];

function graduateAndSetNewClass(cohort) {
	for (i=0;i<cohort.length;i++) {
		if (cohort[i].enrolled === true) {
			cohort[i].graduated = true;
		}
		else if (cohort[i].enrolled === false) {
			cohort[i].enrolled = true;
		}
	}
	console.log(cohort);
}

graduateAndSetNewClass(currentCohort);