Live Location with Nearest Hospital and Route
This project is a web application that displays your live location on a map, detects the nearest hospitals using the Overpass API, and allows you to view routes to a selected hospital using OpenRouteService. The application is built using HTML, JavaScript, and Leaflet.js for interactive maps.

Features
Live Location: Automatically detects and displays the user's current location.
Hospital Detection: Finds and marks the nearest hospitals on the map using the Overpass API.
Routing: Provides a route from the user’s location to a selected hospital with an interactive polyline.
Responsive Design: Works across different devices, including mobile and desktop.
Technologies Used
HTML5: For the structure and layout of the webpage.
JavaScript: Handles geolocation, API calls, and interactive map functionalities.
Leaflet.js: Used for displaying and interacting with maps.
Overpass API: Retrieves data for nearby hospitals.
OpenRouteService API: Calculates and displays routes between locations.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/project-name.git
cd project-name
Open the index.html file in your browser to view the app.

Usage
The web app will automatically detect your location if location services are enabled on your device.
It will search for nearby hospitals and display them as markers on the map.
Clicking on a hospital marker will enlarge the icon and display the route from your current location to the selected hospital.
APIs
Overpass API: Used to fetch the nearest hospitals within a 5 km radius.
OpenRouteService API: Used to calculate and display the route to the hospital. You need to generate an API key from OpenRouteService and add it to the script.
Setup OpenRouteService API
Sign up for an API key from OpenRouteService here.
Add your API key in the script where it says:
javascript
Copy code
var apiKey = 'YOUR_API_KEY_HERE';
Screenshots
You can add some screenshots of your project here

Contributing
Contributions are welcome! Please feel free to submit a Pull Request if you have any improvements or features to add.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments
Leaflet.js for providing the open-source mapping library.
OpenStreetMap for map data.
Overpass API and OpenRouteService for the APIs used in this project.
Feel free to adjust this README.md to suit your project’s needs, such as adding more details, screenshots, or contributing guidelines.
