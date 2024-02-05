// You are given an array of numbers. Count how many times a number is repeated in the array.
// find 5
function getRepeat(numbers, findNum) {
    let count = 0;
    for (let number of numbers) {
        if (number === findNum) {
            count = count + 1;
        }
    }
    return count;
}
const find5 = 5;
const find25 = 25;
const numbers = [5, 6, 11, 12, 98, 5];
const findNum1 = getRepeat(numbers, find5);
console.log(findNum1);
const findNum2 = getRepeat(numbers, find25)
console.log(findNum2);
