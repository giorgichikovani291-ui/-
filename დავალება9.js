// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]

let arr = [1, 2, 3, 4, 5, 6];
const func = function () {
  return (
    arr.filter((a) => a % 2 === 0).reduce((tot, cur) => tot + cur, 0) /
    arr.filter((a) => a % 2 === 0).length
  );
};
console.log(func());

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.

let str = "I love JavaScript";
const counter = function () {
  return str.split(" ").reduce((tot, cur) => {
    if (cur) {
      tot += 1;
    }
    return tot;
  }, 0);

  // მეორე ვარიანტი
  // return str.split(" ").length; //ეს უფრო მარტივი გზა არის მაგრამ სადმე ცარიელი სტრინგი რომ დარჩეს მაინც ჩათვლის ამიტომ პირევლი ვარიანტი უმჯობესია.
};
console.log(counter());

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

let numArr = [1, 2, 3, 4, 5, 6, 44, 55, 12, 13, 15];
const martivebi = function (num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const martiviRicxvebi = numArr.filter(martivebi);
console.log(martiviRicxvebi);

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა

let words = ["dog", "elephant", "cat", "hippopotamus"];
const longest = function () {
  return words.reduce((tot, cur) => {
    if (cur.length > tot.length) {
      return cur;
    }
    return tot;
  }, "");
};
console.log(longest());

// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ

let arr1 = [3, 5, 3, 2, 5, 5, 3, 5];
const nums = function () {
  let reducedArr = arr1.reduce((tot, cur) => {
    if (tot[cur]) {
      tot[cur]++;
    } else tot[cur] = 1;
    return tot;
  }, {});

  let maxNumber;
  let maxCount = 0;
  for (let nums in reducedArr) {
    if (reducedArr[nums] > maxCount) {
      maxCount = reducedArr[nums];
      maxNumber = nums;
    }
  }
  return Number(maxNumber);
};
console.log(nums());

// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numsFunc = function () {
  return nums1.reduce(
    (tot, cur) => {
      cur % 2 === 0 ? tot.luwebi++ : tot.kentebi++;
      return tot;
    },
    { luwebi: 0, kentebi: 0 },
  );
};
console.log(numsFunc());

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

let num = [10, 2, 33, 5, 7];
const minNum = function () {
  return num.reduce((tot, cur) => (cur < tot ? cur : tot), num[0]);
};
console.log(minNum());
