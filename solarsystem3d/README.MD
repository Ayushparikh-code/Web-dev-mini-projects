# 🌌 3D Solar System Visualization

**Welcome to the Solar System Visualization!** This project is an interactive, web-based journey through our solar system, built beautifully using HTML5 Canvas and JavaScript. It provides a highly engaging and educational experience, allowing users to explore planets, asteroid belts, and other celestial bodies right in their browser!

## ✨ Features

* **Realistic Rendering:** Features the Sun, planets, Earth's Moon, and beautiful details like Saturn's rings.
* **Dynamic Animations:** Watch planets orbit at varying, realistic speeds.
* **Asteroid Belts:** Accurately features the Main Asteroid Belt, Earth's Asteroid Belt, and the distant Kuiper Belt.
* **Interactive Zoom:** Easily zoom in and out to explore the massive scale of the solar system.
* **Informative Popups:** Click on any planet to instantly view its name and orbit radius!
* **Responsive Design:** Smoothly adapts to fit different screen sizes.

## 🛠️ Technical Details

* **HTML5 Canvas:** Powers the high-performance rendering of the space environment.
* **Vanilla JavaScript:** Handles all the complex math, orbital animations, and user interactivity.
* **Dynamic Assets:** Planet images are loaded dynamically from an `images` folder to keep the code clean.
* **Custom Zoom Engine:** Built from scratch to allow users to dive deep into the details of the solar system.

## 🚀 How to Run It on Your Computer

**The Easiest Way (Using VS Code):**
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click the `index.html` file and select **"Open with Live Server"**. The animation will start automatically!

**The Standard Way:**
1. Clone the repository:
   ```bash
   git clone [https://github.com/atharvachavan289-gif/Web-dev-mini-projects.git](https://github.com/atharvachavan289-gif/Web-dev-mini-projects.git)
   
Navigate to the solarsystem3d folder.

Make sure the images folder is present with the appropriate planet images.

Double-click index.html to open it in any modern web browser (Chrome, Firefox, Safari, or Edge).

🎮 How to Use & Explore
Zoom In/Out: Use the "+" and "-" zoom controls located in the top-right corner of the screen.

Get Info: Click directly on any planet to reveal a popup with its details.

Close Info: Click anywhere else in the empty space background to close the planet info popup.

⚙️ Customization
Want to make your own universe? You can easily tweak the JavaScript code to customize the visualization:

Planets: Adjust sizes, colors, and orbit radii directly in the planets array.

Asteroids: Modify the density and properties inside the asteroidBelt, earthAsteroidBelt, and kuiperBelt arrays.

Saturn's Rings: Change their appearance via the saturnRings object.

Zoom Limits: Tweak the maxZoom and minZoom variables to restrict or expand how far users can zoom.

⚠️ Known Issues & Compatibility
Browser Support: Works perfectly in all modern web browsers supporting HTML5 Canvas.

Audio Autoplay: Modern browsers often block audio from playing automatically. If you don't hear the background space ambiance, simply click anywhere on the page to start the audio!

🔮 Future Improvements
We are always looking to expand the universe! Planned updates include:

Adding more detailed astronomical information for each planet.

Implementing touch controls for seamless mobile device exploration.

Adding a slider to adjust the animation speed of the orbits.

Including more celestial bodies like dwarf planets (Pluto!) and comets.

🙌 Credits
This Solar System Visualization was created as a fun, educational project. The planet images and astronomical data are inspired by publicly available information from NASA and other amazing space agencies.

Happy Exploring! 💻🚀
