//task 1
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Preethi");


//task 2
const double = (number) => number * 2;

console.log(double(2));

//task 3
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);


//task 4
function getUserData(callback) {
    // Simulate fetching data with a 3-second delay
    setTimeout(() => {
        const user = {
            name: "Karthi",
            age: 28
        };
        // Execute the callback function with the user object
        callback(user);
    }, 3000);
}

// Call the function and log the user's name and age
getUserData((userData) => {
    console.log(`Name: ${userData.name}, Age: ${userData.age}`);
});


