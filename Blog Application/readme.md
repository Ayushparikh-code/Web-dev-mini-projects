# Blog App

This is a simple web application that allows users to create and view blog posts. The app is built using HTML, CSS, JavaScript, and Bootstrap for the frontend, and it provides a modal interface to add and display blog entries.

## Features

- Add a new blog post with an image, title, type, and description.
- Display blog posts dynamically using Bootstrap modals.
- Clean and responsive UI using Bootstrap 5.
- Google Fonts and FontAwesome icons integration for enhanced UI.
- Uses local storage for saving blog entries.

## Prerequisites

To run this application locally, you need to have a modern web browser and an internet connection to load the CDN libraries.

## Installation

1. Clone the repository or download the project files.
    ```bash
    git clone https://github.com/yourusername/blog-app.git
    ```
2. Navigate to the project directory.
    ```bash
    cd blog-app
    ```
3. Open the `index.html` file in a web browser.

## Usage

1. Once the application is loaded, you will see a "Blog" heading in the navbar and an "Add New" button on the right side.
2. To add a new blog post, click the "Add New" button. This will open a modal where you can:
    - Enter the image URL of your blog post.
    - Enter a title for the blog post.
    - Specify the type or category of the blog post (e.g., AI, Tech, etc.).
    - Provide a description of the blog post.
3. Once you've filled in the details, click "Save Changes" to add the blog post.
4. The blog post will be displayed dynamically on the homepage.
5. You can view the full content of the blog post by clicking on it, which will open the post in a modal.

## Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling, using both custom styles and Bootstrap.
- **Bootstrap 5**: Responsive layout and components (modals, navbar, etc.).
- **JavaScript**: Logic for adding blog entries and displaying them in modals.
- **Google Fonts**: For custom typography.
- **FontAwesome Icons**: For adding icons to the buttons and UI elements.

## External Libraries

The following external libraries are used in the project:

- **Bootstrap**: Loaded from CDN for UI components and responsive design.
- **FontAwesome**: Loaded from CDN for icons.
- **Google Fonts**: Poppins font loaded for typography.

### CDN Links Used

- [Bootstrap 5](https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css)
- [FontAwesome](https://use.fontawesome.com/releases/v5.15.3/css/all.css)
- [Google Fonts - Poppins](https://fonts.googleapis.com/css2?family=Poppins&display=swap)

## Customization

You can customize the following:

- **Styles**: Modify `style.css` for custom styling.
- **Scripts**: Update the logic in `script.js` to change how blogs are added, displayed, or stored.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
