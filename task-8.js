// Calculate the total budget required to buy electronics.
function calculateElectronicsBudget(quantity) {
    // validation check
    if (!Array.isArray) {
        return 'Input should be an array';
    }
    // main calculation
    const [a, b, c] = quantity;
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    const laptopPrice = laptop * a;
    const tabletPrice = tablet * b;
    const mobilePrice = mobile * c;
    const total = laptopPrice + tabletPrice + mobilePrice;
    return total;
}
const quantity = [2, 1, 3];
console.log(calculateElectronicsBudget(quantity))