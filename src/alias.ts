/***
 * 7
 * type alias
 *
 */

type Employee = {
    name: string;
    age?: number;
    profession: string;
    address: string;
    hobby?: string;
};

const employee1: Employee = {
    name: "Josh",
    age: 25,
    profession: "Web Developer",
    address: "Uganda",
};
const employee2: Employee = {
    name: "Bob",

    profession: "Next level Web Developer",
    address: "Mexico",
};

const employee3: Employee = {
    name: "Bob",
    age: 26,
    profession: "Next level Web Developer",
    address: "Mexico",
    hobby: "Coding",
};

// type alias from primitives

type PaidType = boolean;
const isPaid: PaidType = true;

/**
 * functions
 */

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
