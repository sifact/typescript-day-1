/*
video - 4
object, literal types and optional types


*/

const user1: {
    company: "Programming Hero" /* for specifying any value ==> type literal */;

    readonly ID: number;
    name: string;
    age: number;
    isMarried: boolean;
    wife?: string;
} = {
    ID: 123,
    company: "Programming Hero",
    name: "montu Mia",
    age: 52,
    isMarried: true,
    // wife: "bibi",
};

// user1.ID =
