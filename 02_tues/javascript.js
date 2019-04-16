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
            if (Number(number) % x == 0)
                console.log(String(x) + ": is a factor of " + number);
            else console.log(String(x) + ": is not a factor of " + number);
    else console.log("Number Must Be Positive!!!");

    readline.question(`Pick another number: `, answer => {
        if (Number(answer) > 0)
            for (var x = 1; x <= range(1, Number(answer)).length; x++) {
                if (Number(answer) % x == 0)
                    console.log(String(x) + ": is a factor of " + answer);
                else console.log(String(x) + ": is not a factor of " + answer);
            }
        else console.log("Number Must Be Positive!!!");
        readline.close();
    });
});
