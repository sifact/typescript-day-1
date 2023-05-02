"use strict";
/***
 * 7
 * type alias
 *
 */
const employee1 = {
    name: "Josh",
    age: 25,
    profession: "Web Developer",
    address: "Uganda",
};
const employee2 = {
    name: "Bob",
    profession: "Next level Web Developer",
    address: "Mexico",
};
const employee3 = {
    name: "Bob",
    age: 26,
    profession: "Next level Web Developer",
    address: "Mexico",
    hobby: "Coding",
};
const isPaid = true;
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
