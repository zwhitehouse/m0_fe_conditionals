
var goodDrivingRecord = true;
var age = 25;

if (goodDrivingRecord === true && age > 25) {
    console.log('you get a discount on the car rental')
} else if (goodDrivingRecord === true || age > 25) {
    console.log('you should pay full price')
} else if (goodDrivingRecord === false && age < 25) {
    console.log('you need someone else to sign up for the rental')
}