const buyTickets = document.getElementsByClassName("tour-button");
const modal = document.getElementById("modal");
const modalCloseButtons = document.getElementsByClassName("modal-close-button");

// Add event listeners to buy ticket buttons
Array.from(buyTickets).forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Add event listeners to modal close buttons
Array.from(modalCloseButtons).forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

// Optional: Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
