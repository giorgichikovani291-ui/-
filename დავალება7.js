// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let halfPerimeter = this.getPerimeter() / 2;
    let area =
      (halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c)) **
      0.5;
    return area;
  }
  IsRightTriangle() {
    return (
      this.a ** 2 + this.b ** 2 === this.c ** 2 ||
      this.a ** 2 + this.c ** 2 === this.b ** 2 ||
      this.b ** 2 + this.c ** 2 === this.a ** 2
    );
  }
}
let perimeter1 = new Triangle(3, 4, 5);
let perimeter2 = new Triangle(25, 26, 15);
let perimeter3 = new Triangle(6, 10, 8);

//პირველი სამკუთხედი
console.log(perimeter1.getPerimeter());
console.log(perimeter1.getArea());
console.log(perimeter1.IsRightTriangle());

// მეორე სამკუთხედი
console.log(perimeter2.getPerimeter());
console.log(perimeter2.getArea());
console.log(perimeter2.IsRightTriangle());

//მესამე სამკუთხედი
console.log(perimeter3.getPerimeter());
console.log(perimeter3.getArea());
console.log(perimeter3.IsRightTriangle());

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().

class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}
class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }
  performanceIndex() {
    return `თქევნ მიერ მითითებული ტელეფონის ბრედნდი არის ${this.brand}, მოდელი - ${this.model}, გამოშვების წელი - ${this.releaseYear}, ხოლო შესრულების index - ${(this.gpuScore * 0.7 + this.batteryCapacity * 0.3).toFixed(1)}`;
  }
}

let smartphone1 = new GamingPhone("iphone", "17 Pro Max", 2025, 90, 38);
let smartphone2 = new GamingPhone("iphone", "13 Pro Max", 2023, 47, 77);
let smartphone3 = new GamingPhone("iphone", "14 Pro Max", 2024, 81, 65);
console.log(smartphone1.performanceIndex());
console.log(smartphone2.performanceIndex());
console.log(smartphone3.performanceIndex());

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

class CryptoWallet {
  constructor(balance = 0) {
    this.balance = balance;
    this.history = [];
  }
  deposit(a) {
    this.balance += a;
    this.history.push(`შეტანა: ${a}$`);
    // return `ბალანსზე არის ${this.balance}$ რადგან თქვენ შეიტანეთ ${a}$`;  //თუ ცალკე დაგვჭირდება თითოეული გამოყენება
  }
  withdraw(b) {
    this.balance -= b;
    this.history.push(`გატანა: ${b}$`);
    // return `ბალანსზე არის ${this.balance}$ რადგან თქვენ გაიტანეთ ${b}$`;  //თუ ცალკე დაგვჭირდება თითოეული გამოყენება
  }
  transfer(c, name) {
    this.balance -= c;
    this.history.push(`გადარიცხვა ${name}სთან: ${c}$`);
    // return `ბალანსზე არის ${this.balance}$ რადგან თქვენ გადარიცხეთ ${c}$, ${name}-სთან`;   //თუ ცალკე დაგვჭირდება თითოეული გამოყენება
  }
  getHistory() {
    return {
      ტრანზაქციები: this.history,
      ბალანსი: this.balance,
    };
  }
}

let bankAcc1 = new CryptoWallet();
let bankAcc2 = new CryptoWallet();
let bankAcc3 = new CryptoWallet();

bankAcc1.deposit(20);
bankAcc1.withdraw(10);
bankAcc1.transfer(5, "ნიკა");
console.log(bankAcc1.getHistory());

bankAcc2.deposit(10);
bankAcc2.withdraw(0);
bankAcc2.transfer(5, "გია");
console.log(bankAcc2.getHistory());

bankAcc3.deposit(40);
bankAcc3.withdraw(20);
bankAcc3.transfer(10, "ნენე");
console.log(bankAcc3.getHistory());

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

class Wishlist {
  constructor() {
    this.itemsList = [];
  }
  addItem(items) {
    this.itemsList.push(items);
    return this.itemsList;
  }
  deleteItem(id) {
    this.itemsList = this.itemsList.filter((a, index) => index !== id);
    return this.itemsList;
  }
  updateItem(index, newItem) {
    this.itemsList = this.itemsList.toSpliced(index, 1, newItem);
    return this.itemsList;
  }
}

let wishlist1 = new Wishlist();

console.log(wishlist1.addItem("fuli"));
console.log(wishlist1.addItem("manqana"));
console.log(wishlist1.addItem("saxli"));

console.log(wishlist1.deleteItem(2));
console.log(wishlist1.updateItem(1, "iaxta"));

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).

class Freelancer {
  constructor() {
    this.balance = 0;
  }
  calculateEarnings(totalHours, hourlySalary) {
    this.balance += totalHours * hourlySalary;
    if (totalHours > 160)
      this.balance += (totalHours - 160) * hourlySalary * 0.25;
    return this.balance;
  }
}

let freelancer1 = new Freelancer();
let freelancer2 = new Freelancer();
let freelancer3 = new Freelancer();

console.log(freelancer1.calculateEarnings(150, 30));
console.log(freelancer2.calculateEarnings(170, 20));
console.log(freelancer3.calculateEarnings(180, 10));
