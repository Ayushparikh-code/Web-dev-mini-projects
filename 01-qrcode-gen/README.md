# QR Code Generator

<a href = "https://qr-generator-webcode.netlify.app/" >For live link Click here</a>

This project is a QR Code Generator built using React. It allows users to input text, select the background colour, and adjust the dimensions to generate a QR code. The generated QR code can be downloaded as well.

## Features

- Input text to generate a QR code
- Select background colour for the QR code
- Adjust dimensions of the QR code
- Download the generated QR code

## Technologies Used

- React
- Tailwind CSS

## Installation

1. Clone the repository:

```bash
- git clone https://github.com/arun-webcode/Reactjs-mini-projects/edit/main/01-qrcode-gen
- cd qr-code-generator
- npm install
- npm run dev
Note - Remember to add this code on tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
darkMode: "class",
theme: {
  extend: {},
},
plugins: [],
};
```

## Usage

1. Open the application in your browser.
2. Enter the text you want to encode in the QR code.
3. Select the background colour using the colour picker.
4. Adjust the dimensions using the range input.
5. Click on the "Generate" button to create the QR code.
6. Download the generated QR code by clicking the "Download" button.

##Project Structure
src/
│
├── components/
│ ├── Header.jsx
│ ├── InputBox.jsx
│ ├── ExtraOptions.jsx
│
├── App.jsx
├── index.css
├── main.jsx
└── index.html

<img src ="src\assets\qr-gen.jpg" />

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Made By - @Arun-webcode
