// Question 1
// const numbers = [1, 2, 3, 4, 5, 7];
// const squaredNumbers = numbers.map((number) => {
//   return number ** 2;
// });

// console.log(squaredNumbers);

// Question 2
// let grade = (score) => {
//   let grade =
//     score >= 90
//       ? "A"
//       : score >= 80
//       ? "B"
//       : score >= 70
//       ? "C"
//       : score >= 60
//       ? "D"
//       : score >= 50
//       ? "E"
//       : "F";
//   return grade;
// };

// console.log(grade(40));

// Question 3

// let car = {
//   companyName: "BMW",
//   model: "D06",
//   year: 2025,
// };

// let carChange = (yearOL) => {
//   let { year } = car;
//   year = yearOL;
//   return year;
// };

// let { companyName, model, year } = car;

// console.log(model);
// console.log(year);
// console.log(carChange(2024));

// Question 4

// let arr = [2, 10, 6, 7, 3];
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// const primeNumbers = arr.filter(isPrime);

// console.log(primeNumbers);

// Question 5

// //!filter
// let a1 = [40, 50, 20, 34, 10];
// let res5 = a1.filter((v, i, ar) => {
//   return v > 20;
// });
// console.log(res5);
// // console.log(a1);

// //! map()
// let res6 = a1.map((v, i, ar) => {
//   return v + 10;
// });
// console.log(res6);
// console.log(a1);

// //! reduce()
// let arr1 = [10, 20, 30, 40, 50];
// let res1 = arr1.reduce((acc, cv) => {
//   console.log(acc, cv);
//   return acc + cv;
// }, 5);

// Question 6

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.org/posts");
//   let data = await response.json();
//   console.log(data);
// }
// getData();

// Question 7
// const person = {
//   name: "Rohan Patil",
//   address: {
//     street: "Lbs",
//     city: "Mulund",
//     zip: "12345",
//   },
//   contact: {
//     phone: "555-1234",
//     email: "rohan.patil@example.com",
//   },
// };

// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber);
