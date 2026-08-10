function isOddNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log("The number " + i + " is Odd");
        } 
    }
}

let num = 25
isOddNumber(num);