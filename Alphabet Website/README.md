# Alphabet Hover Example

A simple, interactive web application that displays the 26 letters of the alphabet in a grid. Hovering over a letter shows a small example image above it (e.g., an apple for 'A'), and clicking a letter opens a visually appealing modal centered on the screen, displaying the letter, an example word, and an enlarged image.

---

## Features

- **Alphabet Grid**: Displays all 26 letters (A-Z) in a responsive grid layout (6 columns on desktop, 3 on mobile).
- **Hover Effect**: On hover, a small image of an example word (e.g., 'Apple' for 'A') appears above the letter.
- **Click Modal**: Clicking a letter opens a centered modal with the letter, example word, and an enlarged image.
- **Visually Appealing Modal**:
  - Gradient background, rounded corners, and subtle shadows.
  - Smooth fade-in and scale animations.
  - Semi-transparent overlay with a blur effect (supported in modern browsers).
  - Stylish close button with hover animation (rotates and changes color).
- **Responsive Design**: Adapts to different screen sizes, with adjusted font sizes, image dimensions, and grid layout.
- **Accessibility**: Includes `alt` attributes for images and supports closing the modal with the Escape key.
- **Multiple Close Options**: Close the modal via:
  - The close button.
  - Clicking outside the modal content.
  - Pressing the Escape key.

---

## Technologies Used

- **HTML**: Structure for the alphabet grid and modal.
- **CSS**: Styling with CSS Grid, Flexbox, animations, and media queries for responsiveness.
- **JavaScript**: Dynamic creation of letter boxes and modal functionality.
- **Google Fonts**: Uses the 'Poppins' font for a modern look (falls back to Arial if unavailable).

---

## Setup

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, Safari).
- A local server (optional, recommended for testing, e.g., `live-server` via npm).
- Images for each letter (named `a.jpg` to `z.jpg`) or placeholder URLs.

### Installation

1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   cd alphabet-hover-example
   ```
   Alternatively, download and extract the project files.

2. **Project Structure**:
   ```text
   alphabet-hover-example/
   ├── images/
   │   ├── a.jpg
   │   ├── b.jpg
   │   └── ... (images for c.jpg to z.jpg)
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

3. **Add Images**:
   - Place 26 images (named `a.jpg` to `z.jpg`) in the `images` folder, each corresponding to an example word (e.g., `a.jpg` for 'Apple').
   - Alternatively, edit `script.js` to use placeholder URLs, e.g.:
     ```javascript
     A: { word: 'Apple', image: 'https://via.placeholder.com/150?text=A' },
     ```

4. **Run the Project**:
   - **Option 1**: Open `index.html` directly in a browser (drag and drop or double-click).
   - **Option 2 (Recommended)**: Serve the project using a local server to avoid CORS issues with images:
     ```bash
     npm install -g live-server
     live-server
     ```
     This opens the project at `http://localhost:8080`.

---

## Usage

1. **View the Alphabet Grid**:
   - The homepage displays a grid of 26 letters (A-Z).

2. **Hover Over a Letter**:
   - Hover over any letter to see a small image of an example word (e.g., an apple for 'A') appear above the letter.

3. **Click a Letter**:
   - Click a letter to open a modal centered on the screen, showing the letter, example word, and an enlarged image.

4. **Close the Modal**:
   - Click the close button (circular '×' in the top-right corner).
   - Click outside the modal content.
   - Press the Escape key.

5. **Responsive Testing**:
   - Resize the browser or use a mobile device to test the responsive layout (grid switches to 3 columns on screens < 600px).

---

## Customization

1. **Images**:
   - Replace `images/a.jpg` to `images/z.jpg` with your own images.
   - Update the `examples` object in `script.js` to change example words or use different image URLs:
     ```javascript
     A: { word: 'Ant', image: 'images/ant.jpg' },
     ```

2. **Modal Styling**:
   - Modify the gradient in `.modal-content` (in `styles.css`):
     ```css
     background: linear-gradient(135deg, #e0e7ff, #c3d7ff);
     ```
   - Adjust the modal size by changing `max-width` in `.modal-content`.
   - Change the close button's hover color (`background-color` in `.close-button:hover`).

3. **Hover Image Position**:
   - Adjust `bottom: 110px` in `.example-image` to change how far above the letter the hover image appears.

4. **Animations**:
   - Modify the modal's fade-in (opacity) or scale animation timings in `.modal` and `.modal-content`.
     Example: Change `transition: transform 0.3s` to `transition: transform 0.5s` for a slower animation.

5. **Fonts**:
   - Replace 'Poppins' by updating the Google Fonts link in `index.html` or removing it to use the Arial fallback.

---

## Example

- Hover over 'A' to see an apple image above the letter.
- Click 'A' to open a modal centered on the screen, showing 'A', 'Apple', and a larger apple image.
- Close the modal by clicking the red rotating '×', clicking outside, or pressing Escape.

---

## Notes

- **Image Paths**: Ensure images are correctly placed in the `images` folder or update `script.js` with valid URLs. Placeholder URLs (e.g., `https://via.placeholder.com/150?text=A`) work for testing.
- **Browser Compatibility**:
  - The `backdrop-filter: blur(5px)` in the modal is supported in modern browsers (Chrome, Edge, Safari, Firefox with flags). Older browsers fall back to a solid overlay.
- **Performance**:
  - Optimize images (e.g., use WebP format or compress JPGs) to improve load times, especially for the modal.
- **Accessibility**:
  - Images include `alt` attributes for screen readers.
  - The modal supports keyboard navigation (Escape key to close).
  - For enhanced accessibility, consider adding:
    ```html
    <div class="modal" id="imageModal" role="dialog" aria-labelledby="modalLetter">
    ```
- **Edge Cases**:
  - If images fail to load, check file paths or network connectivity.
  - On very small screens, the modal image is capped at `max-height: 200px` to prevent overflow.

---

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Suggestions for new features (e.g., sound effects, additional animations) or bug fixes are welcome.

---

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as needed.

---

## Contact

For questions or support, contact the project maintainer or open an issue in the repository.

---

## Notes for You

- **Images**: The README assumes images are in an `images` folder. If you're using placeholder URLs, update the `examples` object in `script.js` and mention this in the README's setup section.
- **Repository**: If you're hosting this on GitHub or another platform, replace `<repository-url>` with the actual URL.
- **License**: I referenced an MIT License; create a LICENSE file in your project if you want to include one, or update the README to reflect your licensing choice.
- **Local Testing**: The `live-server` suggestion ensures images load correctly. If you prefer another method (e.g., Python's `http.server`), I can update the instructions.
- **Customization**: If you want specific additions to the README (e.g., screenshots, a demo link, or more detailed customization), let me know!