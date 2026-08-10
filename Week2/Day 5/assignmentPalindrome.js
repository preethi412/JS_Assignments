function reverseString(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    isPalindrome(rev, str)
}

function isPalindrome(rev, str) {
    if (str == rev) {
        console.log(true);
    } else {
        console.log(false);
    }
}



let str = "mom";
reverseString(str)

reverseString("Hello")