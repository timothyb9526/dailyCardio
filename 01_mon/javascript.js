// var number = prompt("Pick a number: ");

// if (int(number) > 0)
//     for (x in range(1, int(number)))
//         if (x % 2 == 0) console.log(str(x) + ": EVEN");
//         else console.log(str(x) + ": ODD");
// else console.log("Number Must Be Positive!!!");

function range(start, end) {
    var ans = [];
    for (let i = start; i < end; i++) {
        ans.push(i);
    }
    return ans;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Pick a number: `, number => {
        if (Number(number) > 0)
            for (const x of range(1, Number(number)))
                if (x % 2 == 0) console.log(String(x) + ": EVEN");
                else console.log(String(x) + ": ODD");
        else console.log("Number Must Be Positive!!!");

        readline.question(`Pick another number: `, answer => {
            if (Number(answer) > 0)
                for (var x = 1; x <= range(1, Number(answer)).length; x++) {
                    if (x % 2 == 0) console.log(String(x) + ": EVEN");
                    else console.log(String(x) + ": ODD");
                }
            else console.log("Number Must Be Positive!!!");
            readline.close();
        });
});
