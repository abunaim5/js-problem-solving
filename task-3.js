// Write a function to count the number of vowels in a string
function numOfVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of str.toLowerCase()) {
        for (let vowel of vowels) {
            if (letter === vowel) {
                count += 1;
                break;
            }
        }
    }
    // console.log(str);
    return count;
}
const str = 'I studied at Jatiya Kabi Kazi Nazrul Islam University';
const vowelCount = numOfVowels(str);
console.log('Number of vowels in a string is: ', vowelCount);