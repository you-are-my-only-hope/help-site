// For Loops / If/Else Statements, Arrays
// Challenge 1 - Easy - Average Value of Array

// -------------------------------------------------------------------------

// You may run the this file in the terminal window with node

// Do not use any special javascript functions (.sort, .length, or anything from the Math library) to solve the following challenges.

// -------------------------------------------------------------------------

// EASY CHALLENGE: Starting with array [7, 8, 4, 3, 3] find the average value. Make sure that your code works for an array of any length.

// Begin by logging out that we're working on the Easy challenge
console.log('\nEasy:');

// begin by defining our array
// and a counter that will keep track of how many values are in the array
// and an adder variable call sumOfValues that will add all the values in the array
var easyArray = [7, 8, 4, 3, 3];
var counter = 0;
var sumOfValues = 0;

// run a loop starting at index 0, and increasing by 1 every time
// we don't know how big the array will be so we don't define an end for the loop
// instead we will break out of the loop when we run out of values to add
for (var i = 0; ; i++) {

	// check to see if element exists at that location in the array and if it does
	// then increment the counter and also add the element value to the adder
	if (easyArray[i]) {
		counter += 1;
		sumOfValues += easyArray[i];

	// but if there are no more values left in the array, then break out
	} else {

		break;

	}

} // end of for loop

// log out the array
console.log(easyArray);

// log out how many values we counted
console.log('Number of values in array: ' + counter);

// log out what the total sum of all the values was
console.log('Sum of the values: ' + sumOfValues);

// average is total value divided by the number of values so
// calculate that and log it out - and we're done!
var average = sumOfValues / counter;
console.log('Average: ' + average);
