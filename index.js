// Code your solutions in this file

// const cards = ["Ada", "Brendan", "Ali"]

function writeCards( stringName, eventName) {
    let thankYouCards = []
    for (let i = 0; i < stringName.length; i++) {
        thankYouCards.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!` )
    }
    return thankYouCards
}

function countDown( startingNumber) {
    while (startingNumber > 0 ) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}