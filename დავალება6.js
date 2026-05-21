// 1) აუცილებელია გამოიყენო ფრომისი
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია

// function block() {
//   for (let i = 1; i < 10000000000; i++) {}
// }
// const newPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res();
//   }, 0);
// });

// console.log("one");
// newPromise.then(() => block());
// console.log("two");

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// const firstPromise = new Promise((res, rej) => {
//   res("Gamarjoba");
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log("შეცდომაა " + err));
// const secondPromise = new Promise((res, rej) => {
//   rej("Hello World!");
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log("შეცდომაა " + err));

// Promise.allSettled([firstPromise, secondPromise])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("შეცდომაა " + err));

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// const firstPromsie = new Promise((res, rej) => rej(1));
// const secondPromsie = new Promise((res, rej) => res(2));
// const thirdPromsie = new Promise((res, rej) => rej(3));
// const fourthPromsie = new Promise((res, rej) => rej(4));

// Promise.allSettled([
//   firstPromsie,
//   secondPromsie,
//   thirdPromsie,
//   fourthPromsie,
// ]).then((res) => {
//   let fillteredPromises = res.filter((a) => a.status === "fulfilled");
//   console.log(fillteredPromises[0]);
// });

//მეორენაირად
// Promise.any([firstPromsie, secondPromsie, thirdPromsie, fourthPromsie])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`ყველა Promise დარეჯექთდა ${err}`));

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

// const firstPromsie = new Promise((res, rej) => rej(1));
// const secondPromsie = new Promise((res, rej) => res(2));
// const thirdPromsie = new Promise((res, rej) => rej(3));
// const fourthPromsie = new Promise((res, rej) => res(4));

// Promise.allSettled([
//   firstPromsie,
//   secondPromsie,
//   thirdPromsie,
//   fourthPromsie,
// ]).then((res) => {
//   let reducedPromises = res.reduce(
//     (tot, curr) => {
//       curr.status === "fulfilled" ? tot.fulfilled++ : tot.rejected++;
//       return tot;
//     },
//     {
//       fulfilled: 0,
//       rejected: 0,
//     },
//   );
//   console.log(reducedPromises);
// });

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// const firstPromsie = new Promise((res, rej) => rej(1));
// const secondPromsie = new Promise((res, rej) => res(2));
// const thirdPromsie = new Promise((res, rej) => rej(3));
// const fourthPromsie = new Promise((res, rej) => res(4));
// const fifthPromise = new Promise((res, rej) => rej(5));

// Promise.allSettled([
//   firstPromsie,
//   secondPromsie,
//   thirdPromsie,
//   fourthPromsie,
//   fifthPromise,
// ]).then((res) => {
//   let fillteredPromises = res.filter((a) => a.status === "rejected");
//   console.log(fillteredPromises);
// });

// 6) გაუშვი ეს ორი API ერთდროულად

// const api1 = "https://jsonplaceholder.typicode.com/users";
// const api2 = "https://jsonplaceholder.typicode.com/posts";

// async function fetchAPI() {
//   const [users, posts] = await Promise.all([
//     fetch(api1).then((res) => res.json()),
//     fetch(api2).then((res) => res.json()),
//   ]);
//   console.log(users);
//   console.log(posts);
// }

// fetchAPI();
