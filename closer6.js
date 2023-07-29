let pageCount = 0;

const items = [2, 4, 5, 7, 8];

// items.forEach(function iterator(nums) {
//     pageCount++;
//     console.log(nums);
// })

items.forEach((nums) => {   // both function working fine
    pageCount++;
    console.log(nums);

})

console.log(pageCount)