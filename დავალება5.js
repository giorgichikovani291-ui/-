// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

const timer = function (sec) {
  let interval = setInterval(() => {
    console.log(sec);
    sec--;
    if (sec < 0) clearInterval(interval);
  }, 1000);
};
timer(5);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

const numberGuesser = function (num) {
  let randomNum = Math.trunc(Math.random() * 100);
  console.log(randomNum);
  while (randomNum !== num) {
    randomNum = Math.trunc(Math.random() * 100);
    console.log(randomNum);
  }
  console.log(`რიცხვები დაემთხვა - ${randomNum}`);
};
numberGuesser(79);

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

function moreThan(n, callBack) {
  n > 27
    ? callBack()
    : n < 27
      ? console.log(`${n}, ნაკლებია 27-ზე`)
      : console.log(`ტოლია`);
}
function callBack() {
  console.log(`ნამდვილად მეტია 27-ზე`);
}
moreThan(27, callBack);
moreThan(10, callBack);
moreThan(30, callBack);

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

async function fetchAPI(url) {
  let res = await fetch(url);
  let data = await res.json();
  let slicedData = data.slice(0, 4);
  console.log(slicedData);
}

// async function fetchAPI(API) {
//   fetch(API)
//     .then((res) => res.json())
//     .then((data) => console.log(data.slice(0, 4)))
//     .catch((error) => console.log(error));
// }

fetchAPI("https://jsonplaceholder.typicode.com/users");
// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];
let reducedPeople = people.reduce(
  (x, y) => {
    if (y.age > 10) x.atzeMeti.push(y);
    if (y.age < 20) x.oczeNaklebi.push(y);
    return x;
  },
  { atzeMeti: [], oczeNaklebi: [] },
);
console.log(reducedPeople);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

function func(x, y, callBack) {
  x > y ? callBack() : console.log(`ნაკლები ან ტოლია`);
}
function callBack() {
  console.log("მეტია");
}

func(4, 5, callBack);
func(54, 17, callBack);
func(29, 29, callBack);

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები

let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];
let reduceProducts = products.reduce(
  (tot, curr) => {
    curr.price > 20 ? tot.oczeMeti.push(curr) : tot.oczeNaklebi.push(curr);
    return tot;
  },
  { oczeMeti: [], oczeNaklebi: [] },
);
console.log(reduceProducts);
