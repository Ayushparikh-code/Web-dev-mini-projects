# 🧪 Breaking Bad Characters Explorer

A sleek, single-page React application that fetches and displays character data from the Breaking Bad universe. Users can easily browse and dynamically filter through their favorite characters using real-time API data.

This project is part of the `Web-dev-mini-projects` collection.

## ✨ Key Features
* **Dynamic Grid Layout:** Displays character profiles in a highly responsive CSS Grid.
* **Live Filtering:** Instantly search and filter characters by name.
* **API Integration:** Asynchronously fetches character details (like name, nickname, and portrait) from an external endpoint.

## 🛠️ Tech Stack
* **Frontend Framework:** React (Functional Components & Hooks)
* **Styling:** CSS3 (focused on CSS Grid for layout)
* **JavaScript:** ES6+ syntax
* **Data Fetching:** Axios for handling asynchronous HTTP requests

## 📡 API Reference
This project relies on the Breaking Bad Character API to populate the user interface.
* **Endpoint Used:** `https://www.breakingbadapi.com/api/characters`

## 🏃‍♂️ How to Run Locally

To get this React application running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ayushparikh-code/Web-dev-mini-projects.git](https://github.com/Ayushparikh-code/Web-dev-mini-projects.git)
Navigate to the directory:
Open your terminal and change into the specific Breaking Bad project folder.

Install dependencies:
Because this project uses React and Axios, you must install the Node modules first:

Bash
npm install
Start the development server:

Bash
npm start
The application will automatically compile and open in your default browser at http://localhost:3000

## Screenshots

<p>Initially, it will show a loader</p>

![demo1](./Screenshots/ss3.png)

<p>After 3-4 seconds, it will load all the characters of the show</p>

![demo2](./Screenshots/ss1.png)

<p>Clicking on any image, it will show other information like Name, Nickname, Birthday, Occupation, Status...</p>

![demo3](./Screenshots/ss2.png)

<p>User can search a particular character by typing his/her name in the search box</p>

![demo4](./Screenshots/ss4.png)

## Live Demo

![live demo](./Screenshots/demo.gif)
