"use strict";
/***
 * video - 8
 *
 */
// const newDeveloper: JuniorDeveloper = {
//     name: "John",
//     expertise: "Js",
//     experience: 6,
// };
// another example:
/* Enum */
var Level;
(function (Level) {
    Level[Level["junior"] = 0] = "junior";
    Level[Level["mid"] = 1] = "mid";
    Level[Level["senior"] = 2] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "John",
    expertise: "Js",
    experience: 6,
    isLeadership: true,
    level: Level.mid,
};
