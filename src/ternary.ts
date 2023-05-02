/***
 * video - 10
 * ternary operator
 */

const age2 = 22;

// if (age >= 18) console.log("Yes...");
// else console.log("No...");

const isAdult = age2 >= 18 ? "Yes" : "No";

// Nullish coalescing operator ==> ??
// null and undefined
// works for only null and undefined

// const isAuthenticatedUser = "";
// const userName = isAuthenticatedUser ?? "Guest";
// const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";

// console.log({ nullish: userName }, { ternary: userName2 });

// type Man = {
//     name: string;
//     age: number;
//     address: {
//         city: "No city";
//         road: "No road";
//         home?: "";
//     };
// };

// const man: Man = {
//     name: "man",
//     age: 100,
//     address: {
//         city: "No city",
//         road: "No road",
//     },
// };

// const home = man?.address?.home ?? "No Home";

// function generateAdder(a: number): (b: number) => number {
//     return function (b: number) {
//         return a + b;
//     };
// }

// const addTwo = generateAdder(2);
// console.log(addTwo(3));
// console.log(addTwo(5));
