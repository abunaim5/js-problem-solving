/**
 * Write a function to find the longest word in a given string.
 * sampleInput: I am learning Programming to become a programmer.
*/
function getLongestWord(str) {
    str = str.split(' ');
    let tempCount = 1;
    let findWord = '';
    for (let word of str) {
        if (word.length > tempCount) {
            tempCount = word.length;
            findWord = word;
        }
    }
    return findWord;
}
const str = 'I am learning Programming to become a programmer';
const longestWord = getLongestWord(str);
console.log('The longest word is: ', longestWord);