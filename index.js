//One
//Pseudocode
//Create a function called BankAccount
//Create  the function constructors name and balance
//Create object functions deposit and withdraw
//For the object function deposit, it increases the balance and logs the new balance
//For the object function withdraw, create a condition that logs the new balance if the amount is less than the balance else insufficient funds
//Call function
function BankAccount(name, balance) {
    this.name = name;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
        console.log(`Dear ${this.name} your new balance: ${this.balance}`);
    };

    this.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Dear ${this.name} you withdrew ${amount} and your new balance: ${this.balance}`);
        } else {
            console.log(`Dear ${this.name} you have sufficient funds,your current balance is: ${this.balance}`);
        }
    };
}

const account1 = new BankAccount("Alice", 1000, 500);
account1.deposit(200);
account1.withdraw(1500);
const account2 = new BankAccount("Bob", 500, 600);
account2.withdraw(100);
account2.deposit(75);
const account3 = new BankAccount("Charlie", 2000, 1500);
account3.deposit(500);
account3.withdraw(1000);


//Two
//Pseudocode
//Create an object called TaskList.
//In the object Tasklist initialize a tasks property as an empty array.
//Create the addTask method that adds a strig to the task array.
//Create the completeTask method that finds the index of a given task in the array.
//Demonstrate the functionality of the methods

const taskList = {
  tasks: [],
  addTask: function(task) {
    this.tasks.push(task);
    console.log(`Task "${task}" added to the list.`);
  },
  completeTask: function(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log(`Task "${task}" completed and removed.`);
    } else {
      console.log(`Task "${task}" not found in the list.`);
    }
  },
  listTasks: function() {
    if (this.tasks.length === 0) {
      console.log("No tasks in the list.");
    } else {
      console.log("Remaining tasks:");
      this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    }
  }
};

taskList.addTask("Cleaning utensils");
taskList.addTask("Feed the animals");
taskList.addTask("Finish coding assignment");
taskList.addTask("Read a book");
taskList.addTask("Do laundry");

taskList.listTasks();

taskList.completeTask("Cleaning utensils");
taskList.completeTask("Feed the animals"); 

taskList.listTasks();

taskList.completeTask("Finish coding assignment");

taskList.listTasks();


//Three
//Pseudocode
//Create a function called Student 
//Create a function constuctors name and scores
//Create  object functions getAverage and hasPassed
//For the object function getAverage add all the scores and divide by the number of scores.
//For the object hasPassed create a condition that the student will pass if they have more than 50
//Call the function

function Student(name, scores) {
    this.name = name;
    this.scores = scores;

    this.getAverage = function () {
        if (this.scores.length === 0) {
            return 0;
        }
        const sum = this.scores.reduce((acc, score) => acc + score, 0);
        return sum / this.scores.length;
    };

    this.hasPassed = function () {
        return this.getAverage() >= 50;
    };
}

const student1 = new Student("Grace", [60, 75, 80, 55]);
const student2 = new Student("Henry", [40, 45, 50, 35]);

console.log(`${student1.name}'s average score: ${student1.getAverage()}`);
console.log(`${student1.name} passed: ${student1.hasPassed()}`);

console.log(`${student2.name}'s average score: ${student2.getAverage()}`);
console.log(`${student2.name} passed: ${student2.hasPassed()}`);


//Four
//Pseudocode
// Create a class called ShoppingCart with an empty constructor.
//Initialize the items to an empty array.
//Create a method called addItems which adds the item to the cart.
//Create a method called getTotal which calculates the total price for the items in the cart.
//Create a method called printCart which checks if the cart id empty, else the items in the cart and their prices


class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
      console.log(`${item.name} added to the cart.`);
    }
  
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    printCart() {
      if (this.items.length === 0) {
        console.log("Your cart is empty.");
      } else {
        console.log("Items in your cart:");
        this.items.forEach(item => console.log(`${item.name} - $${item.price}`));
        console.log(`Total cost: $${this.getTotal()}`);
      }
    }
  }
  
  const item1 = { name: "Dress", price: 20 };
  const item2 = { name: "Jacket", price: 35 };
  const item3 = { name: "Slippers", price: 50 };
  
  const myCart = new ShoppingCart();
  myCart.addItem(item1);
  myCart.addItem(item2);
  myCart.addItem(item3);
  myCart.printCart();




//Five
//Pseudocode
//Create a function called Movie 
//Create the function constructors title, year and rating
//Create object functions isClassic and recommend
//For the object function isClassic create a condition that returns true if the year is before 2000
//For the object function recommend create a condition that returns 'Highly recommended' if the rating is greater than 8 else 'Worthy watching'
//Call the function
function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function () {
        return this.year < 2000;
    };

    this.recommend = function () {
        if (this.rating > 8) {
            return "Highly recommended!";
        } else {
            return "Worth watching.";
        }
    };
}

const movie1 = new Movie("Captain America", 1999, 8.7);
const movie2 = new Movie("The Wolf Street", 2010, 8.8);
const movie3 = new Movie("Harry Potter", 1994, 8.9);
const movie4 = new Movie("Curse of Chucky", 1994, 9.3);

console.log(`${movie1.title} (Released in ${movie1.year}) - Classic: ${movie1.isClassic()}, Recommendation: ${movie1.recommend()}`);
console.log(`${movie2.title} (Released in ${movie2.year}) - Classic: ${movie2.isClassic()}, Recommendation: ${movie2.recommend()}`);
console.log(`${movie3.title} (Released in ${movie3.year}) - Classic: ${movie3.isClassic()}, Recommendation: ${movie3.recommend()}`);
console.log(`${movie4.title} (Released in ${movie4.year}) - Classic: ${movie4.isClassic()}, Recommendation: ${movie4.recommend()}`);

