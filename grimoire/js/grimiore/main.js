// Put your code here

console.log("Do you believe in magic? ;)")
console.log("---------------------------")

const allSpells = [
    {
        spellName: "Kazing! (Makes your crush fall in love with you)",
        isEvil: false,
        requiredEnergy: 50
    },
    {
        spellName: "Hellacious! (Gives you infinite knives)",
        isEvil: true,
        requiredEnergy: 95
    },
    {
        spellName: "Malicin! (Lets you tell lies easily)",
        isEvil: true,
        requiredEnergy: 25
    },
    {
        spellName: "Coolmania! (Allows you to be the coolest ever)",
        isEvil: false,
        requiredEnergy: 30
    }
];

const makeEvilBook = () => {
    let evil = {
        Title: "Evil Book",
        Spells: allSpells.filter(spell => spell.isEvil)
    }
    return evil
}

const makeGoodBook = () => {
    let good = {
        Title: "Good Book",
        Spells: allSpells.filter(spell => !spell.isEvil)
    }
    return good
}

const showSpellBook = (book) => {
    console.log(book.Title)
    for (const spell of book.Spells) {
        console.log(spell.spellName)
    }
}

let evil = makeEvilBook();
let good = makeGoodBook();

showSpellBook(evil);
showSpellBook(good);