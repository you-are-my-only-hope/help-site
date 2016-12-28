// For Loops / If/Else Statements, Arrays
// Challenge 1 - Hard - Most Common Array Element

// -------------------------------------------------------------------------

// You may run the this file in the terminal window with node

// Do not use any special javascript functions (.sort, .length, or anything from the Math library) to solve the following challenges.

// -------------------------------------------------------------------------

// HARD CHALLENGE: Starting with array ['car', 'boat', 'train', 'dragon', 'car', 'fruit', 'vegetable', 'boat', 'car'] find which element occurs most often in the array.

// Begin by logging out that we're working on the Hard challenge
console.log('\nHard:');

// Define the array we were given, and also make a new empty array (hardArraySortedCount)
// that will hold an array of both sorted elements along with a count of their occurrance

var hardArray = ['car', 'boat', 'train', 'dragon', 'car', 'fruit', 'vegetable', 'boat', 'car'];
var hardArraySortedCount = [];

// log out the array we're working with
console.log(hardArray);

// As in the easy and medium challenges, we cannot use the .length property so we will
// do it manually by looping through the array and checking at each step to see if 
// an element exists at that point
for (var i = 0; ; i++) {

	// does element exist at this location?
	if (hardArray[i]) {

		// Since element exists, we will now begin looping through values in
		// our sorted array in the same fashion as before
		for (var j = 0; ; j++) {

			// if an element exists at this spot within our sorted array...
			if (hardArraySortedCount[j]) {

				// ... then we check to see if is the same value as the value
				// we are testing for that we are getting from the original array
				if (hardArraySortedCount[j] == hardArray[i]) {

					// if the two are equal then that means we need to increment
					// the count in our sorted array
					hardArraySortedCount[j+1] += 1;

					// after incrementing, break out so we can test the next
					// item in the originally provided array
					break;
				}

			// but if an element doesn't exist at this spot in our sorted array... 
			} else {

				// .. then go ahead and add in the value we're testing for and
				// also add in a count of 1 for it, then break out and check
				// the next value from the originally provided array
				hardArraySortedCount[j] = hardArray[i];
				hardArraySortedCount[j+1] = 1;
				break;
	
			}
		
		} // end of for var-j loop

	// if there are no more values to test from the provided array then we are
	// done, and we can break out of the for loop. Remember we are forced to
	// break out because we have no end point in our loop! Since we were not
	// permitted to use .length, we never knew when we would run out of elements
	} else {

		break;
	
	} // end of if (hardArray[i]) statement

} // end of for var-i loop

// At this point we can log out our sorted array that shows the count of
// how often each element occurred

// console.log(hardArraySortedCount);

// Our next step is to figure out which of these elements has the highest count
// We begin by defining a temp location, and for now we begin by targeting the
// count of the first item in the array
var tmpLocation = 1;

// Then we loop through our sorted array, two steps at a time so that each time
// we are looking at the count of that item
for (var i = 1; ; i += 2) {

	// Again we don't know the length of the array, so we will test to see if
	// an element exists at that location. We check with -1 because the element
	// itself is one spot back, while our index is going through the occurrance
	// values
	if (hardArraySortedCount[i-1]) {

		// If element exists there, then compare its count against the
		// temporary location's count. If the count of this location is
		// higher then replace the location of the temporary location with
		// this one.
		if (hardArraySortedCount[i] > hardArraySortedCount[tmpLocation]) {
			tmpLocation = i;
		}

	// if there are no more elements then break out
	} else {

		break;

	}

} // end of for loop

// After going through the above loop, we know that our temp location variable is holding
// the index of the highest occurrance value. So we can now simply log out the element
// that occurred most often by targeting -1, and its occurrance count. And we're done!
console.log('Highest occurrance element is ' + hardArraySortedCount[tmpLocation-1] + ' for a total of ' + hardArraySortedCount[tmpLocation] + ' times');

