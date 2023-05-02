/*
video - 9
** null, unknown, never

*/

const searchName = (value: string | null) => {
    if (value) console.log("There is nothing to search...");
    else console.log("Searching...");
};

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const value = speed.split(" ");
        const convertedSpeed = (Number(value[0]) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    } else console.log("wrong type...");
};

// getMyCarSpeed(10);
// getMyCarSpeed("10 Kmh^-1");
// getMyCarSpeed(true);

/****
 * never
 *
 */

const throwError = (message: string) => {
    throw new Error(message);
};

throwError("Error is mortal");
