const auctionItem = {
    name: "Custom Keyboard",
    description: "A cool custom keyboard I built and want to sell for millions 🤑",
    startingBid: 100,
    highestBid: 0,
};

var currentHighestBid = 0;
var currentBids = {};


// NOTE: DOM elements we use frequently
const bidFormElement = document.querySelector("form");
const bidAmountElement = document.querySelector("#bid-amount");
const maxBidAmountElement = document.getElementById("max-bid-amount");
const curPersonalBidElement = document.querySelector("#current-bid");
const curHighestBidElement = document.querySelector("#highest-bid");

// NOTE: adding an event listener to dectect when a new local bid is placed
bidFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = parseInt(bidAmountElement.value);

    if (isNaN(amount) || amount <= currentHighestBid) {
        alert("Please raise your bid.");
    } else {
        let bidderName = "John";
        currentBids[bidderName] = amount;

        currentHighestBid = amount;
        curPersonalBidElement.textContent = `$${currentHighestBid}`;
        curHighestBidElement.textContent = `$${currentHighestBid}`;
    }
});

// NOTE: every second update the highest bid display
setInterval(() => {
    curHighestBidElement.textContent = `$${currentHighestBid}`;
}, 1000);



// NOTE: timer for the auation
const countdownDisplay = document.querySelector("#time-remaining");
let timeRemaining = 60;

const countdownInterval = setInterval(() => {
    timeRemaining--;
    countdownDisplay.textContent = `Time Remaining: ${timeRemaining} seconds`;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        bidAmountElement.disabled = true;


        let winnerMessage = `Auction ended. The winner is John Doe with a bid of $${currentHighestBid}.`;
        alert(winnerMessage);
    }
}, 1000);


// NOTE: auto bid feature
setInterval(() => {
    for (const bidderName in currentBids) {
        if (currentBids.hasOwnProperty(bidderName) && parseInt(maxBidAmountElement.value) > currentHighestBid) {
            currentHighestBid = currentHighestBid + 1;
            curPersonalBidElement.textContent = `$${currentHighestBid}`;
            curHighestBidElement.textContent = `$${currentHighestBid}`;
        }
    }
}, 1000);