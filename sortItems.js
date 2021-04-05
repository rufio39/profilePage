// bubble sort algorithum to arrange the numbers in the array from smallest to largest.
var numberToSort = [20,18,16,14,12,10,8,6,4,2,0,1,3,5,7,9,11,13,15,17,19];
var sortedList = sortItems(numberToSort)

function sortItems(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

module.exports = sortedList;