// For Loops / If/Else Statements, Arrays
// Challenge 1 - Medium - Middle Value of Array

// -------------------------------------------------------------------------

// You may run the this file in the terminal window with node

// Do not use any special javascript functions (.sort, .length, or anything from the Math library) to solve the following challenges.

// -------------------------------------------------------------------------

// MEDIUM CHALLENGE: Starting with array ['8', '5', '3', '2', '4', '18'], and also array [''8', '5', '3', '2', '4', '18', '10'], find the middle value in each case. If the array has an even number of values, find the middle two values. For this challenge you may use the parseInt() function.

// Begin by logging out that we're working on the Medium challenge
console.log('\nMedium:');

// Challenge says this should work with two different arrays, so define them
// both, and check one at a time. Comment one out, uncomment the other, and vice
// versa and test for both
var mediumArray = ['8', '5', '3', '2', '4', '18'];
// var mediumArray = ['8', '5', '3', '2', '4', '18', '10'];

// log out the array we're working with
console.log(mediumArray);

// define a variable that will hold the length of the array
var mediumArrayLength = 0;

// Since we are not allowed to use .length property, let's count manually.
// Like in the easy challenge, we will run a for loop starting at 0, incrementing
// by one, and with an unknown end point for now because we don't know how big
// the array is
for (var i = 0; ; i++) {

	// if an element exists at the i-th spot of the array then increment our
	// array length count by 1, and also convert the value at that location
	// from string to an integer for later sorting
	if (mediumArray[i]) {
		mediumArrayLength += 1;
		mediumArray[i] = parseInt(mediumArray[i]);

	// but if there are no more elements left then break out of the loop
	} else {

		break;

	}

} // end of for loop

// Now that the array has been turned to integer values, let's log it
// out. Note that the values are still unsorted. Also, since we are 
// console logging by concatenating with a string, the array will also
// display as a string for this next statement
console.log('Unsorted Values: ' + mediumArray);


// Now let's sort the array from smallest to largest value.
// There are many sorting algorithms - Google "sorting algorithm" and
// you will find many. An easy one to implement (although inefficient) is
// one called a bubble sort - where sorting causes the highest value to
// bubble to one end of the array. Code below is an implementation of
// a bubble sort. It is left to the reader to investigate sorting algorithms
// via Google search and further investigation. Suffice it to say the below
// sorting implements a bubble sort and we will end up with an array of
// values sorted from lowest to highest value
for (var j = 0; j < mediumArrayLength; j++) {
	for (var k = 0; k < (mediumArrayLength - j - 1); k++) {
		if (mediumArray[k] > mediumArray[k+1]) {
			var tmp = mediumArray[k];
			mediumArray[k] = mediumArray[k+1];
			mediumArray[k+1] = tmp;
		}
	}
} // end of the bubble sort outer-most for loop

// Now that we have a sorted array, let's log it out. As before, due to
// string concatenation in the console log call, the array will be displayed
// as a string
console.log('Sorted Values: ' + mediumArray);

// Now that we have a sorted array, we want to find the middle value(s). There are
// two cases. First case is when there are an odd number of values in which case
// we just log out the middle most value. Second case is when there are an even number
// of values in which case we have to log out the two middle-most values. The easiest
// way to do this is to check if we have even or odd number of values by running a
// modulus 2 (% 2) function against the array length we found earlier.
if (mediumArrayLength % 2 == 0) {

	// If there are an even number of values, then divide the length by two and
	// console log the values on either side of that. Remember that indexing on
	// arrays begins at 0, so we grab the -1 position and the calculated position.
	console.log('Middle values are: ' + mediumArray[mediumArrayLength/2 - 1] + ' and ' + mediumArray[mediumArrayLength/2]);

} else {

	// on the other hand we must have an odd number of values in which case
	// just divide the length by 2, and we know we'll have X.5 as a value. Then
	// subtract the 0.5 out and we will be at the middle most element - And
	// we are done!
	console.log('Middle value is: ' + mediumArray[mediumArrayLength/2 - 0.5]);
}
