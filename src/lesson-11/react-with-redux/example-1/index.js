function greaterThan (parameter1) {
    return function (parameter2) {
        return parameter1 > parameter2;
    };
}


const greaterThan10 = greaterThan(10);

const greaterThan15 = greaterThan(15);

console.log(greaterThan10, greaterThan15)

console.log(greaterThan10(11));
console.log(greaterThan15(11));
