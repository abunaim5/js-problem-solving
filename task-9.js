/**
 * You are given an array of phone objects, each containing information about the model, brand, and price. Write a JavaScript function named findAveragePhonePrice that takes this array as input and return the average price of phone.
*/
function findAveragePhonePrice(array) {
    let itemCount = 0;
    let phonePrices = 0;
    for (item of array) {
        itemCount += 1;
        phonePrices = phonePrices + item.price;
    }
    const avgResult = phonePrices / itemCount;
    console.log(itemCount);
    console.log(phonePrices);
    return avgResult;

}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 35000 },
    { model: "PhoneC", brand: "Sony", price: 40000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const avgPhonePrice = findAveragePhonePrice(phones);
console.log(avgPhonePrice);