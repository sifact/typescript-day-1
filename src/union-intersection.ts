/***
 * video - 8
 *
 */

// union ==> "|"

// type NoobDeveloper = {
//     name: string;
// };

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: "John",
//     expertise: "Js",
//     experience: 6,
// };

/*   important */
// type Pinfo = {
//     name: string;
// };

// type Einfo = {
//     studentId: number;
//     subject: string;
//     isAdmin: boolean;
// };
// const abcd: Einfo | Pinfo = {
//     studentId: 3243,
//     subject: "bangla",
//     isAdmin: true,
// };

// console.log(abcd);
// intersection: (common)

type NoobDeveloper = {
    name: string;
};

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

// const newDeveloper: JuniorDeveloper = {
//     name: "John",
//     expertise: "Js",
//     experience: 6,
// };

// another example:

/* Enum */

enum Level {
    junior,
    mid,
    senior,
}

type NextLevelDeveloper = JuniorDeveloper & {
    isLeadership: true;
    level: Level;
};

const newDeveloper: NextLevelDeveloper = {
    name: "John",
    expertise: "Js",
    experience: 6,
    isLeadership: true,
    level: Level.mid,
};
