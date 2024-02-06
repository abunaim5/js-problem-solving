// Find the lowest number in the array below.
function findLowestNum(arr) {
    if (arr.length === 0) {
        return 'The array is empty';
    }
    let lowestNum = arr[0];
    for (number of arr) {
        if (number < lowestNum) {
            lowestNum = number;
        }
    }
    return lowestNum;
}
const heights = [167, 190, 120, 165, 137];
console.log(findLowestNum(heights));

// Another way using Math.min() method.
function findMinNum(array) {
    let result = Math.min(...array)
    return result;
}
const heights1 = [167, 190, 120, 165, 137];
console.log(findMinNum(heights1));
