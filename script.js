//? Task 1


// const computers = [
//     {
//         title: "Macbook Air M1",
//         price: 85000,
//     },
//     {
//         title: "Dell",
//         price: 65000,
//     },
//     {
//         title: "Aser ZenBook",
//         price: 40000,
//     },
//     {
//         title: "Aser Aspair",
//         price: 65000,
//     },
//     {
//         title: "Macbook Pro",
//         price: 100000,
//     },
// ];

//! возрастания
// computers.sort(function(a, b) {
//     return a.price - b.price;
//   });
//   console.log(computers);
  

// ! убывания
//   computers.sort(function(a, b) {
//     return b.price - a.price;
//   });
//   console.log(computers);
  


//? Task 2
//! возрастания
// const numbers = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
// numbers.sort((prev, next) => prev - next);
// console.log(numbers);

// ! убывания
// const numbers = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
// numbers.sort((prev, next) => next - prev);
// console.log(numbers);

//!
//? Task 3 


//! возрастания
//  const fruits = ['strawberry', 'mango', 'watermelon', 'lemon', 'kiwi'];

//  const fruits1 = fruits.sort (function (a, b) {
//     if (a > b) {
//         return 1;
//     }
//     if (b > a){
//         return -1;
//     }
//     return 0;
//  });
//  console.log(fruits1);

// ! убывания
//  const fruits2 = fruits.sort (function (a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a){
//         return -1;
//     }
//     return 0;
//  });
//  console.log(fruits2);
 

//? Task 
//! возрастания
// const numbers = [4, 123, -5, 6, 100];

// let num = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers [i] <  num) {
//         num = numbers [i];
//     }
    
// }
// console.log(num);



// ! убывания
// const numbers = [4, 123, -5, 6, 100];

// let num = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers [i] >  num) {
//         num = numbers [i];
//     }
    
// }
// console.log(num);

//? Task 5


//!


//? Task 6

// const instagramUser = {
//     userName: "Uzumaki123",
//     email: "user@gmail.com",
//     password: "123123",
//     avatarUrl: "https://classroom.google.com",
// followers: "1m",
// follwing: 512,
// title: "Never Give up"
// };

// for (let key in instagramUser){
//     console.log(key);   
// }
// for (let value in instagramUser) {
//     console.log(instagramUser[value]);
    
// }
// console.log(Object.keys(instagramUser));

// console.log(Object.values(instagramUser));

//!
//? Task 7 
// const computers = [
//     {
//         title: "Macbook Air M1",
//         price: 85000,
//     },
//     {
//         title: "Dell",
//         price: 65000,
//     },
//     {
//         title: "Aser ZenBook",
//         price: 40000,
//     },
//     {
//         title: "Aser Aspair",
//         price: 65000,
//     },
//     {
//         title: "Macbook Pro",
//         price: 100000,
//     },
// ];

// let sum = 0;
// for (const object of computers) {
//     sum  += object.price;
// }
// console.log(sum);



// //? Task 8

// const instagramUser = {
//     userName: "Uzumaki123",
//     email: "user@gmail.com",
//     password: "123123",
//     avatarUrl: "https://classroom.google.com",
// followers: "1m",
// follwing: 512,
// title: "Never Give up"
// }


// const objectLenght = Object.keys (instagramUser);
// for (let i = 0; i < objectLenght.length; i++){
//     console.log(objectLenght[i]);
    
// }

// const values = Object.keys (instagramUser);
// let index = 0;
// while (index < values.length) {
//     const element = instagramUser [values [index]];
//     console.log(element);
//     index++;
// }

// for (const [key, values] of Object.entries(instagramUser)){
//     const item = key + ": " + values;
//     console.log(item);
    
// }
