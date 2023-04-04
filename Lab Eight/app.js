const auctionItem = {
    name: "Item Name",
    description: "Item Description",
    startingBid: 100,
    highestBid: 100,
};

let currentHighestBid = 100;



// NOTE: DOM elements we use frequently
var bidFormElement = document.querySelector("form");
var bidAmountElement = document.querySelector("#bid-amount");
var curPersonalBidElement = document.querySelector("#current-bid");
var curHighestBidElement = document.querySelector("#highest-bid");

// NOTE: adding an event listener to dectect when a new local bid is placed
bidFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = parseInt(bidAmountElement.value);

    if (isNaN(amount) || amount <= currentHighestBid) {
        alert("Invalid bid amount. Please enter a higher bid.");
    } else {
        currentHighestBid = amount;
        curPersonalBidElement.textContent = `$${currentHighestBid}`;
        curHighestBidElement.textContent = `$${currentHighestBid}`;
    }
});


setInterval(() => {
    curHighestBidElement.textContent = `$${currentHighestBid}`;
}, 1000);