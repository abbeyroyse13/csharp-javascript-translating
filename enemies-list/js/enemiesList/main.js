// Put your code here

console.log("My Enemies List!");
console.log("----------------");

const enemyList = () => {

    const enemies = [
        {
            FirstName: "Billy",
            LastName: "Loomis",
            Offenses: [
                "Killed like 4 people",
                "Was mean to his gf"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Stu",
            LastName: "Macher",
            Offenses: [
                "Also killed like 4 people",
                "Annoying in a baffling way"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Roman",
            LastName: "Bridger",
            Offenses: [
                "He's whiny about everything",
                "He hates his half sis for reasons she can't control"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Mickey",
            LastName: "Altieri",
            Offenses: [
                "Has poor taste in movies",
                "Doesn't like Randy Meeks"
            ],
            IsReallyHated: true
        }
    ];
    return enemies;
}

const enemies = enemyList();

for (const enemy of enemies) {
    if (enemy.IsReallyHated) {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really really dislike!)`)
    } else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
};