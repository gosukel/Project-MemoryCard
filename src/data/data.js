const levelData = {
    levelOne: [
        "bulbasaur",
        "charmander",
        "squirtle",
        "caterpie",
        "weedle",
        "pidgey",
        "oddish",
        "poliwag",
        "abra",
        "machop",
        "bellsprout",
        "geodude",
    ],
    levelTwo: [
        "ivysaur",
        "charmeleon",
        "wartortle",
        "metapod",
        "kakuna",
        "pidgeotto",
        "gloom",
        "poliwhirl",
        "kadabra",
        "machoke",
        "weepinbell",
        "graveler",
    ],
    levelThree: [
        "venusaur",
        "charizard",
        "blastoise",
        "butterfree",
        "beedrill",
        "pidgeot",
        "vileplume",
        "poliwrath",
        "alakazam",
        "machamp",
        "victreebel",
        "golem",
    ],
    levelFour: [
        "chikorita",
        "cyndaquil",
        "totodile",
        "hoothoot",
        "sentret",
        "mareep",
        "hoppip",
        "wooper",
        "togepi",
        "teddiursa",
        "phanpy",
        "larvitar",
    ],
    levelFive: [
        "bayleef",
        "quilava",
        "croconaw",
        "noctowl",
        "furret",
        "flaaffy",
        "skiploom",
        "quagsire",
        "togetic",
        "pupitar",
        "ursaring",
        "donphan",
    ],
    levelSix: [
        "meganium",
        "typhlosion",
        "feraligatr",
        "ampharos",
        "jumpluff",
        "tyranitar",
        "lugia",
        "ho-oh",
        "raikou",
        "entei",
        "suicune",
        "celebi",
    ],
    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
};
// const levelOne = [
//     "bulbasaur",
//     "charmander",
//     "squirtle",
//     "caterpie",
//     "weedle",
//     "pidgey",
//     "oddish",
//     "poliwag",
//     "abra",
//     "machop",
//     "bellsprout",
//     "geodude",
// ];
// const levelTwo = [
//     "ivysaur",
//     "charmeleon",
//     "wartortle",
//     "metapod",
//     "kakuna",
//     "pidgeotto",
//     "gloom",
//     "poliwhirl",
//     "kadabra",
//     "machoke",
//     "weepinbell",
//     "graveler",
// ];
// const levelThree = [
//     "venusaur",
//     "charizard",
//     "blastoise",
//     "butterfree",
//     "beedrill",
//     "pidgeot",
//     "vileplume",
//     "poliwrath",
//     "alakazam",
//     "machamp",
//     "victreebel",
//     "golem",
// ];
// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }
// const oldLevelData = { levelOne, levelTwo, levelThree, shuffleArray };
export default levelData;
