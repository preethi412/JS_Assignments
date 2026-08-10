function splitString(text) {
    let wordsArray = text.split(/\s+/);

    let lastWord = wordsArray[wordsArray.length - 1];

    let lastWordLength = lastWord.length;

    console.log(lastWordLength);
}

function trimString(str) {
    let words = str.trim().split(/\s+/);

    if (words.length === 0 || words[0] === "") {
        return 0;
    }

    return words[words.length - 1].length;
}

function isAnagram(str1, str2) {

    let cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    let sortedStr1 = cleanStr1.split('').sort().join('');
    let sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

splitString("Welcome to Playwright Testing")

console.log(trimString(" fly me to  the moon "));

console.log(isAnagram("listen","silent"));

console.log(isAnagram("Hello","Welcome"));