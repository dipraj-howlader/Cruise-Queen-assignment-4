function handleClassChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketNumber = getInputValue(ticket);
    let ticketNewCount = ticketNumber;
    if (isIncrease == true) {
        ticketNewCount = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketNewCount = ticketNumber - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    console.log('$' + ticketTotal);
    calculateTotal();
}

function calculateTotal() {
    const firstTicketCount = getInputValue('first');

    const economyTicketCount = getInputValue('economy');

    const totalPrice = firstTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    // tax calculation
    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = '$' + tax;

    //grand total
    const grandTotal = tax + totalPrice;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

document.getElementById('booking').addEventListener('click', function () {
    document.getElementById('ticket-details').style.display = "none";
    document.getElementById('booking-details').style.display = "block";
})