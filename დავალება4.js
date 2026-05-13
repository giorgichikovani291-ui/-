//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში

const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];
console.log(laptops.sort((a, b) => b.price - a.price)[0]); //.model თუ მხოლოდ მოდელი გვინდა

// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.

let object = {
  width: 55,
  height: 51,
  getArea: function () {
    return this.width * this.height;
  },
};
console.log(object.getArea());

// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];
console.log(
  students
    .filter((a) => a.passed === true)
    .map((a) => a.name)
    .join(", "),
);

// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];
console.log(products.filter((a) => a.price < 10).map((a) => a.title));

// 5)დაალაგე ზრდადობით rating-ის მიხედვით

const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];
console.log(movies.sort((a, b) => a.rating - b.rating));

// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model

const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
console.log(phones.sort((a, b) => a.price - b.price)[0].model);

// 7)დაბეჭდე 300- გვერდიანზე მეტი

const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];

console.log(books.filter((a) => a.pages > 300));

//თუ უბრალოდ სათაურები გვინდა string ის სახით მაშინ
console.log(
  books
    .filter((a) => a.pages > 300)
    .map((a) => a.title)
    .join(", "),
);

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
const phones2 = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
console.log(
  phones2
    .sort((a, b) => a.price - b.price)
    .map((a) => a.price)
    .reduce((tot, curr) => tot + curr, 0),
);
