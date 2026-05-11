// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

// let arr = [1, 2, 3, 4, 5];
// let mappedArr = arr.map((a) => a * 3);
// console.log(mappedArr);

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
// let filteredArr = arr.filter((a) => a % 3 !== 0); //რომლებიც არიყოფა 3ზე
// let filteredArr = arr.filter((a) => a % 3 === 0); //რომლებიც იყოფა 3ზე
// console.log(filteredArr);

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი

// let arr = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
// let filteredArr = arr.filter((a) => a > 0);
// let reducedFilteredArr = filteredArr.reduce((a, b) => a + b, 0);
// console.log(reducedFilteredArr);

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო

// let namesArr = ["giorgi", "nika", "mariami"];
// let newNamesArr = namesArr.map((a) => a.slice(0, a.length - 1));
// console.log(newNamesArr);

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mappedArr = arr.map((a) => a * 2);
// let filteredMappedArr = mappedArr.filter((a) => a % 3 !== 0);
// console.log(filteredMappedArr);

// 6) დაალაგე რიცხვები ზრდადობით

// let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
// let sortedArr = numsArr.sort((a, b) => a - b);
// console.log(sortedArr);

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.

// let arr = [1, -1, 2, -3, 5, 7, 8, 10, 4, -20, 44, 100, 40];
// let mappedArr = arr.map((a) => a * 2);
// let filteredMappedArr = mappedArr.filter((a) => a > 5);
// console.log(filteredMappedArr);

// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]

// let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];
// let unique = [...new Set(arr)];
// console.log(unique);

// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს

// let arr = [-1, 20, 90, 4, 5, 111];
// let sortedArr = arr.sort((a, b) => a - b);
// let yvelazeMcireRicxvebisJami = sortedArr[0] + sortedArr[1];
// console.log(yvelazeMcireRicxvebisJami);
