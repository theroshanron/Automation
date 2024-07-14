
// This script will help you cancel all the requests sent to profiles that have seen your requests.

// Function to click all cancel buttons
function clickAllCancelButtons() {
    // Select all buttons with the specific class
    const cancelButtons = document.querySelectorAll('button.sc-cCbPEh.jKEwUg');

    // Loop through the NodeList and click each button
    cancelButtons.forEach(button => button.click());
}

// Function to move to the next page
function goToNextPage() {
    // Select the next page button
    const nextPageButton = document.querySelector('#root > div > div > div > div.CoreContent.CoreContent--desktop-inbox-sent-interests > div.CoreMain > div > div > div.sc-dQRrkI.cGfaMD > div.sc-hshbuu.cVgcDu > div:nth-child(2) > div > div.sc-dLMQBh.gXvpxX > button.sc-brVaRJ.cFBsuk');

    // If the next page button exists and is clickable, click it
    if (nextPageButton) {
        nextPageButton.click();

        // Wait for the next page to load, then repeat the process
        setTimeout(processPage, 2000); // Adjust the timeout if necessary
    }
}

// Function to process a page (click cancel buttons and move to the next page)
function processPage() {
    clickAllCancelButtons();
    goToNextPage();
}

// Start the process
processPage();
