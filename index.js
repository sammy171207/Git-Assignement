function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    } else {
        console.log(number + " is an Odd number.");
    }
}

let number = 15
checkOddEven(Number(number));
