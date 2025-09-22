// Get the form and the result container elements from the HTML
const changeForm = document.getElementById('changeForm');
const resultDiv = document.getElementById('result');

// Add an event listener for when the form is submitted
changeForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (reloading the page)
    event.preventDefault();

    // Get the amount entered by the user and convert it to an integer
    const amount = parseInt(document.getElementById('amountInput').value);

    // Check if the amount is a valid number
    if (isNaN(amount) || amount < 1) {
        resultDiv.innerHTML = "Please enter a valid amount.";
        return;
    }

    // Define the denominations of Thai Baht banknotes and coins
    const denominations = [500, 100, 50, 20, 1];
    let remainingAmount = amount;
    let resultString = '';

    // Loop through each denomination to calculate the change
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        
        // Calculate the number of notes/coins for the current denomination
        const count = Math.floor(remainingAmount / denomination);

        // If the count is greater than 0, add it to the result string
        if (count > 0) {
            resultString += `${count} of ฿${denomination}<br>`;
            
            // Update the remaining amount using the modulo operator
            remainingAmount %= denomination;
        }
    }

    // Check if there are any remaining cents (if you were to include them)
    // The photo only shows whole numbers, so this is not strictly needed but good practice
    // if (remainingAmount > 0) {
    //     resultString += `${remainingAmount} of ฿1<br>`;
    // }

    // If no change can be given (e.g., amount is 0 or no denominations match), display a message
    if (resultString === '') {
        resultDiv.innerHTML = "No change can be given for this amount.";
    } else {
        // Display the final result in the result div
        resultDiv.innerHTML = resultString;
    }
});