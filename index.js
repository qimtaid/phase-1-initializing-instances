// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert; // Private field for dessert
    }
  }

let breakfast1 = new Breakfast("toast", "orange juice");
let lunch1 = new Lunch("Caesar salad", "tomato soup", "iced tea");
let dinner1 = new Dinner("green salad", "pumpkin soup", "steak", "chocolate cake");

console.log(breakfast1); // Output: Breakfast { food: 'toast', drink: 'orange juice' }
console.log(lunch1); // Output: Lunch { salad: 'Caesar salad', soup: 'tomato soup', drink: 'iced tea' }
console.log(dinner1); // Output: Dinner { salad: 'green salad', soup: 'pumpkin soup', entree: 'steak' }

  