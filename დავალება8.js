// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "object") {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (typeof arr[i][j] === "object") {
//         for (let k = 0; k < arr[i][j].length; k++) {
//           !newArr.includes(arr[i][j][k]) ? newArr.push(arr[i][j][k]) : newArr;
//         }
//       } else !newArr.includes(arr[i][j]) ? newArr.push(arr[i][j]) : newArr;
//     }
//   } else !newArr.includes(arr[i]) ? newArr.push(arr[i]) : newArr;
// }
// console.log(newArr);

//ფუნქციის გამოყენებით

// function arrayKiller(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "object") {
//       arrayKiller(array[i]);
//     } else {
//       if (!newArr.includes(array[i])) {
//         newArr.push(array[i]);
//       }
//     }
//   }
// }
// arrayKiller(arr);
// console.log(newArr);

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// let products = [
//   { name: "Phone", price: 1200, rating: 4.5 },
//   { name: "Laptop", price: 2500, rating: 4.8 },
//   { name: "Book", price: 30, rating: 4.9 },
//   { name: "TV", price: 800, rating: 4.0 },
// ];
// console.log(
//   products.filter((a) => a.price < 1000).sort((a, b) => b.rating - a.rating)[0],
// );

// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული

// let sentence = "dog cat dog bird cat dog fish bird";
// let splitedSentence = sentence.split(" ");
// let reducedSentence = splitedSentence.reduce((tot, curr) => {
//   if (tot[curr]) {
//     tot[curr]++;
//   } else {
//     tot[curr] = 1;
//   }
//   return tot;
// }, {});

// let maxCount = 0;
// let maxWord = "";
// for (let word in reducedSentence) {
//   if (reducedSentence[word] > maxCount) {
//     maxWord = word;
//     maxCount = reducedSentence[word];
//   }
// }
// console.log({ maxCount, maxWord });

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.

// let str = "abdbbabbsaddasbdbwbsabdbsadsafasfwasfwfwafsa";
// let splitedStr = str.split("");
// let newStrArr = {};
// for (let word of splitedStr) {
//   if (newStrArr[word]) {
//     newStrArr[word]++;
//   } else {
//     newStrArr[word] = 1;
//   }
// }
// console.log(newStrArr);

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)

// let str = ["ana", "gela", "abba", "nika", "gig"];
// let strObject = {};
// function isPalindrome(array) {
//   for (let word of array) {
//     if (word === word.split("").reverse().join("")) {
//       console.log(`${word} :`, true);
//     } else {
//       console.log(`${word} :`, false);
//     }
//   }
// }
// isPalindrome(str);

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

// let arr1 = [1, 2, 3, 4, 5, 13, 14, 2, 5];
// let arr2 = [14, 5, 2, 3, 14, 7, 4, 23, 75];
// function func(arr1, arr2) {
//   let fullArr = arr1.concat(arr2);
//   let uniqueArr = [...new Set(fullArr)];
//   let sum = 0;
//   for (let i = 0; i < uniqueArr.length; i++) {
//     sum += uniqueArr[i];
//   }
//   return sum;
// }
// console.log(func(arr1, arr2));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.

// let factorial = [5, 6, 7, 8, 9, 10, 0];
// function factorialCounter(factorial) {
//   let factorialArr = [];
//   for (let i = 0; i < factorial.length; i++) {
//     let factorial2 = 1;
//     if (factorial[i] > 0) {
//       for (let j = 1; j <= factorial[i]; j++) {
//         factorial2 *= j;
//       }
//       factorialArr.push(factorial2);
//     } else if (factorial[i] === 0) {
//       factorialArr.push(1);
//     }
//   }
//   return factorialArr;
// }
// console.log(factorialCounter(factorial));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]

// let arr = [1, 2, 3, 4, 7, 3, 65, 5, 6, 7, 8, 9, 10];
// let num = 14;
// let answerObj = [];
// for (let nums of arr) {
//   let findeArr = arr.find((a) => a === num - nums);
//   if (findeArr) {
//     answerObj.push([nums, findeArr]);
//   }
// }
// console.log(answerObj);
