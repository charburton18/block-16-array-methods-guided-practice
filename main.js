// X 1. Somewhere of your choice, create two files, array_methods.html and array_methods.js.

// X 2. In your HTML file, make sure you have html, head, title, and body tags. Make sure to also link your array_methods.js via script tag in the head of your document. 

// 3. Move now to your array_methods.js file. Since we are learning array methods, it makes sense to start by defining an array on which we will invoke the methods. Copy and paste the items array below into your JavaScript file.
const items = [
  { id: 1, name: 'foo', price: 7 },
  { id: 2, name: 'bar', price: 6 },
  { id: 3, name: 'bazz', price: 9 },
  { id: 4, name: 'quq', price: 13 }
];

// 4.  Next, we will use the prompt() method to ask the user for the name of an item we are trying to find in our items array. Invoke the prompt() method and pass it two arguments:

// A string asking the user to enter an item name
// A string for the default value of the prompt
//  Then, store the result of the prompt in a variable called name. 

const inputName = prompt('Enter an item name', 'bar');

console.log(inputName);

//  5. Let us now use our first array method, find. On your next line, call the find method on your items array. Remember, we need to pass it a callback function. The callback function should take an argument of a single item and return a boolean, whether or not the item's name matches the name stored in our name variable. Remember to use strict equality when comparing values. Store the result in a variable called found.

// function called isNameTheSame takes a string, returns boolean

// MY ANSWER
// const isNameTheSame = (string) => {
//   return string === name;
// }

// console.log(isNameTheSame(name));


//SOLUTION

const found = items.find((currentItem) => {
  return inputName === currentItem.name;
});

// 6. We can now write some boolean logic and log a message if our found variable is a truthy value. (If we found an item with that name.) Write an if statement, which checks if there is a found item. If there is a found item, console.log() a message saying that you found the item, as well as the item itself. If we did not find an item, log a message saying the item was not found. 

if(found) {
  console.log(`We found your item. It is `, found)
} else {
  console.log(`We could not find your item.`);
};

// We will keep using this pattern for the next three examples! Prompt input from the user, store the input in a variable, use an array method, and then log the result.

// 7. Prompt the user to enter a string we will use to discover if any item has that string in their name. Store the user input in a variable called search. 

const search = prompt(`Enter a string.`, `ar`);

// Solution using .find()
const found = items.find((currentItem) => {
  // does the current item have the inputName in its name
  return currentItem.name.indexOf(search) !== -1;
})

console.log(found);


// 8. We need to filter out any items from our array if they do not contain our search string. We will use the array filter() method to accomplish this. Call the filter method on the items array and check whether or not the item's name contains the search string. Remember that the filter needs to return a boolean (true or false) whether or not all the elements pass through the filter. Store the result of the filter method in a variable called foundItems, and log them to the console. (There is more than one way to write this.)

// Solution using .filter()
const foundItems = items.filter((currentItem) => {
  return currentItem.name.indexOf(search) !== -1;
})

console.log(foundItems);

// Show Solution
// 9. Next, let us follow the same pattern, this time using the map() array method. Prompt the use to choose a key, ID, name, or price so we can display the values associated with their input key and store the input in a variable called keyForMapping. Then, use the map method on the items array, using the keyForMapping to access and return the values in the new array. Store this mapped array in a variable called mappedValues, and console.log() it. JOHNATHAN THIS IS BADLY WORDED AND YOU ONLY NEED TO HAVE THE USER WRITE ID, NAME, OR PRICE, NOT KEY.

// prompt user to enter key, id, name, or price (for now just do id, name, price... key later!)
// create a variable called keyForMapping (store the user input)
const keyForMapping = prompt(`enter a key, id, name or price.`, `name`)

// display the values based on their input key

// create a variable called mappedValues this will (equal the result from the .map)
const mappedValues = items.map((currentItem) => {
  // use .map to give us a new array with the values based on the keyForMapping
  // return each value
  return currentItem[keyforMapping];
});

console.log(mappedValues);


// 10. The last array method we will use in this practice is the reduce() method. Reduce is very powerful and can be used to accomplish a myriad of things. For our purposes, we will use reduce to sum up the values for a specifically prompted key. Prompt the user to choose a key, either the ID or, better yet, the price, and store it in a variable. Then, call the reduce method on the items array, passing the callback an accumulator and item. Also, pass reduce a starting point of 0 as the second argument. With reduce, we want to reassign the accumulator to be itself plus the value associated with the stored key for reducing and finally return the accumulator. This one may be confusing at first, but give it a shot, and observe the solution code when you are ready.

const input = prompt(`enter id or price.`, `price`);

// reduce takes in a function and a starting value for the accumulator (0)
const sum = items.reduce((currentTotal, currentItem) => {
  return currentTotal + currentItem[input];
}, 0);

console.log(sum);



