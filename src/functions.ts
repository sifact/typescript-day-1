/***
 * video: 5 - 6
 * functions
 *
 ***/

function add(num1: number, num2: number): number {
    return num1 + num2;
    // return "added";
}

const result = add(5, 6);

// add()
console.log(result);

const start = (car: string): string => `${car} is started...`;

start("my bike");

const myArray = [1, 4, 5];

let addSquare = 0;
const newArray = myArray.map((element) => {
    const square = element * element;
    addSquare += square;

    // myArray[0] = 5;
    return addSquare;
});

const person: {
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: "Sifat",
    balance: 4,
    addBalance(money: number) {
        return this.balance + money;
    },
};

person.addBalance(5);

/***
 *
 * 6
 *
 */

// default parameter in function
// we must use default value in second parameter...

function addNumbers(num1: number, num2: number = 10): number {
    return num1 + num2;
    // return "added";
}

// addNumbers(7);

/***
 *
 *
 * spread operator
 *
 */

// const myFriends = ["chandler", "joy", "ross"];

// const newFriends = ["monica", "rachel", "pheobe"];

// const allFriends = [...myFriends, ...newFriends];

// console.log(allFriends);

// rest operator

// const greetFriends = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Hi ${friend1} \n Hi ${friend2} \n ${friend3}`);
// };

// greetFriends("chotoBhai", "boroBhai", "mejhoBhai");

const greetFriends = (...friends: string[]) => {
    // console.log(friends);
    const result = friends.map((friend) => `Hi ${friend}`);
    return result;
};

const result2 = greetFriends(
    "chotoBhai",
    "boroBhai",
    "mejhoBhai",
    "bangla bhai ",
    "deshi bhai"
);
// console.log(result2.join());

/* 
array and object destructuring

*/
const myFriends = ["chandler", "joy", "ross"];

const newFriends = ["monica", "rachel", "pheobe"];

const [bestFriend1, , bestFriend3] = myFriends;

console.log(bestFriend1, bestFriend3);
