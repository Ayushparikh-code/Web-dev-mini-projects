# 🌸 Habit Tracker

A **simple and elegant Habit Tracker Web App** built using **HTML, CSS, and JavaScript**.  
It allows users to set a monthly habit, track daily progress, and visualize completion status through an interactive calendar.  
Progress is stored locally in your browser using **LocalStorage**, so your data persists even after refreshing or closing the tab.

---

##  Features

- **Dynamic Calendar:** Automatically highlights the current day and displays all days of the current month.
-  **Custom Habit Title:** Click on the title to set or update your habit anytime.
-  **Local Storage Support:** Saves your daily progress persistently across sessions.
-  **Progress Tracker:** Shows completed days count (e.g. `10/30`).
-  **Reset Option:** Easily reset the calendar and start a new habit cycle.
-  **Responsive and Aesthetic UI:** Uses custom fonts and soft color palettes for a pleasant experience.

---

##  How It Works

1. The script fetches the **current date, month, and year** using JavaScript’s `Date()` object.
2. It dynamically fills the calendar grid with the days of the current month.
3. You can **click each day** to mark it as “completed” — turns **pink** when selected.
4. Progress (`true/false` for each date) is stored using `localStorage` with keys like `MM-DD-YYYY`.
5. The total days completed are displayed and updated in real-time.
6. The **Reset** button clears all progress for the current month.

---

Build by [zienna](https://github.com/ziennaa)


