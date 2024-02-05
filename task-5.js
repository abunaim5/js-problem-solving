// Generate a random number between 10 to 20.
function generateRandomNum() {
    let generateNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    return generateNum;
}
let getNum = generateRandomNum();
console.log(getNum);