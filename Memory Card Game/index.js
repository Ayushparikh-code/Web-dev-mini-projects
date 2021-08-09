const cards = document.querySelectorAll(".card");
var firstCard, secondCard;
var lock = false;
var isFlipped = false;

cards.forEach(card => 
    card.addEventListener("click", flip));

function flip() {
    if (lock)
    return;

    if (this === firstCard)
    return;

    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    check();
}

function check() {
    var isMatch = firstCard.dataset.image === 
    secondCard.dataset.image;
    isMatch ? success() : failed();
}

function success() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function failed() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        var position = Math.floor(Math.random() * 16);
        card.style.order = position;
    });
})();
