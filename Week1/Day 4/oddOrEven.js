function isOddOrEven(number) {
    if (number % 2 === 0) {
        console.log("The number " + number + " is Even");
    } else {
        console.log("The number " + number + " is Odd");
    }
}

for (let i = 1; i <= 12; i++) {
    isOddOrEven(i);   
}