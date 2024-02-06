// Find the friend with the smallest name.
function smallestName(nameArr) {
    let count = nameArr[0].length;
    let smallest = '';
    for (item of nameArr) {
        if (item.length < count) {
            smallest = item;
        }
    }
    return smallest;
}
const nameArr = ['john', 'mark', 'doe', 'frank', 'ashe'];
console.log(smallestName(nameArr))