const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        image: "https://m.media-amazon.com/images/I/91GjOmU7z1L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 8.99,
        image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 9.99,
        image: "https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF1000,1000_QL80_.jpg"
    },
];

let cartCount = 0;

function displayBooks() {
    const bookList = document.getElementById("bookList");
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        bookList.appendChild(bookDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

// Initialize the bookshop
displayBooks();
