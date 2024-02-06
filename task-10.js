/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate the total salary has to be provided by the company in a month.
*/
function providedSalary(arrObj) {
    let sumOfStarting = 0;
    let incrementSalary = 0;
    for (person of arrObj) {
        let yearlyIncrement = person.experience * person.increment;
        incrementSalary = incrementSalary + yearlyIncrement;
        sumOfStarting = sumOfStarting + person.starting;
    }
    const total = sumOfStarting + incrementSalary;
    return total;
}
const employees = [
    { name: "John", experience: 5, starting: 20000, increment: 5000 },
    { name: "Mark", experience: 3, starting: 15000, increment: 7000 },
    { name: "Frank", experience: 9, starting: 30000, increment: 1000 },
    { name: "Tailor", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalary = providedSalary(employees);
console.log(totalSalary);