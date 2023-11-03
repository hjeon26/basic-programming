var pets = ["bird", "dog", "cat"];
console.log(pets[1]);

var phones = ["samsung", "iphone"];
console.log(phones[0]);

var schoolPrograms = [];

schoolPrograms[0] = "computer science";
schoolPrograms[1] = "business";
schoolPrograms[2] = "art";

console.log(schoolPrograms);
console.log(schoolPrograms[1]);

var supplies = [];
supplies[0] = "erasers";
supplies[2] = "pens";
supplies[4] = "paper";

console.log(supplies);

// 

var petTypes = ["bird", "cat", "dog"];
console.log(petTypes);

petTypes.pop();
console.log(petTypes);
// 
var dogs = new Array();

dogs[0] = "German Shephard";
dogs[1] = "Husky";
dogs[2] = "Chihuahua";

console.log(dogs);
// 
var dogs = [];

dogs[3] = "German Shephard"
dogs[2] = "Husky";
dogs[1] = "Chihuahua";

console.log(dogs);
// 
var food = [
    "Hot dog",
    "Salad",
    "chips"
]

console.log(food);
console.log(food[1]);
console.log(food[1][2]);

var food = [
    "Hot dog",
    " Salad",
    " chips"
]

console.log(food.toString());
// Without arrays, just strings will show.
//  
var food = [
    "hot dog",
    "salad",
    "chips"
]

console.log(food.join(" "))
// without arrays, join all food arrays with space in between.
// 
var shoppingList = [
    junkFood = ["chips", "crackers", "cookies"],
    drinks = ["coffee", "cola", "orange", "milk"]
]

console.log(shoppingList[1][2]);
// grab the value of "orange"
// 

var houseOne = ["laptop", "oven", "bed"];
var houseTwo = ["jacket", "desktop", "paper"];

var stuff = houseOne.concat(houseTwo)

console.log(stuff);
// concat = add all values of multiple variables together into one variable
// 



