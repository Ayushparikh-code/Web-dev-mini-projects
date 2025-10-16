# Professional Black Theme Todo List App

A modern, feature-rich Todo List application with a sleek black theme, built with HTML, CSS, and JavaScript. This app uses localStorage to persist tasks between sessions and is perfect for Hacktoberfest contributions.

![Todo App Preview](img/screenshot.png)

## Features

- ✅ Add new tasks with priority levels (High, Medium, Low)
- 📅 Set due dates for tasks
- ✏️ Edit existing tasks with modal dialog
- ❌ Delete tasks
- ✔️ Mark tasks as complete/incomplete
- 🔍 Search tasks
- 🎯 Filter tasks (All, Active, Completed)
- 📊 Task statistics
- 🗑️ Clear all tasks
- 📱 Fully responsive design
- 💾 Local storage persistence
- 🎨 Modern UI with smooth animations
- 🎨 Sleek black theme with green accents
- 📤 Export tasks to JSON
- 📥 Import tasks from JSON
- ⏰ Due date indicators (Overdue, Today, Future)
- 🚩 Priority flags for visual organization

## Technologies Used

- HTML5
- CSS3 (Flexbox, Animations, Responsive Design)
- JavaScript (ES6+)
- Font Awesome Icons
- LocalStorage API

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding tasks to your todo list

### Adding Tasks
- Type your task in the input field
- Select a priority level (Low, Medium, High)
- Optionally set a due date
- Click the "Add" button or press Enter

### Managing Tasks
- **Complete/Uncomplete**: Click the checkmark/undo button
- **Edit**: Click the edit button (pencil icon) to open the edit modal
- **Delete**: Click the trash button
- **Filter**: Use the filter buttons to show All/Active/Completed tasks
- **Search**: Use the search box to find specific tasks
- **Clear All**: Click the "Clear All" button to remove all tasks
- **Export**: Click the "Export" button to download your tasks as a JSON file
- **Import**: Click the "Import" button to load tasks from a JSON file

### Task Indicators
- **Priority Flags**: 
  - 🔴 Red flag for High priority
  - 🟠 Orange flag for Medium priority
  - 🟢 Green flag for Low priority
- **Due Dates**:
  - ⚠️ Exclamation icon for overdue tasks
  - 📅 Calendar icon for future dates
  - 📆 "Today" label for tasks due today

## Screenshots

![Todo App Screenshot](img/screenshot.png)

## Contributing to Hacktoberfest

This project is part of Hacktoberfest! We welcome contributions from the community. Here's how you can contribute:

### Getting Started
1. Fork this repository
2. Clone your forked repository to your local machine
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Commit your changes with a descriptive commit message
6. Push your changes to your forked repository
7. Create a Pull Request to the main repository

### Ideas for Contributions

We're looking for contributions in the following areas:

1. **New Features**
   - Add task categories/tags
   - Implement drag and drop reordering
   - Add recurring tasks
   - Add task notes/descriptions
   - Implement dark/light mode toggle
   - Add task sharing capabilities
   - Implement undo/redo functionality

2. **UI/UX Improvements**
   - Improve animations and transitions
   - Add more visual feedback
   - Enhance mobile responsiveness
   - Add keyboard shortcuts
   - Improve accessibility (ARIA labels, screen reader support)

3. **Functionality Enhancements**
   - Add export/import functionality in different formats (CSV, PDF)
   - Add notifications/reminders
   - Add sorting options (by date, priority, etc.)
   - Add bulk actions (complete all, delete completed, etc.)

4. **Code Quality**
   - Refactor existing code for better performance
   - Add more comprehensive error handling
   - Improve code documentation
   - Add unit tests
   - Implement design patterns (MVC, Observer, etc.)

5. **Documentation**
   - Improve this README file
   - Add user guides
   - Create setup instructions
   - Add contribution guidelines
   - Create API documentation

### Contribution Guidelines

1. Ensure your code follows the existing style and conventions
2. Write clear, descriptive commit messages
3. Test your changes thoroughly
4. Update documentation if needed
5. Be respectful and constructive in all interactions

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build
2. Update the README.md with details of changes to the interface, if applicable
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent
4. Your Pull Request will be reviewed by maintainers, who may request changes before merging

## Project Structure

```
todo-list-app/
├── index.html
├── style.css
├── app.js
├── README.md
├── LICENSE
└── img/
    └── screenshot.png
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[Kshitiz Maurya](https://github.com/kshitiz79)

## Acknowledgements

- [Font Awesome](https://fontawesome.com/) for icons
- All contributors to this project

## Support

If you like this project, please give it a ⭐️ on GitHub!

---

Made with ❤️ for Hacktoberfest 2025