//Print only duplicate elements from array

let arr = [1, 2, 3, 2, 4, 5, 1, 4, 9, 7];

for (let i = 0; i <= arr.length; i++) {
    for (let j = 1 + i; j <= arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
        }
    }
}