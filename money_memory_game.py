import random
import tkinter as tk
from tkinter import messagebox

# Initialize the main window
window = tk.Tk()
window.title("Money Memory Game")
window.geometry("400x400")

# List of card values (numbers for simplicity)
cards = list(range(1, 9)) * 2
random.shuffle(cards)

# Variables to track the game state
first_card = None
first_button = None
matches_found = 0
attempts = 0

# Function to check for matches between two selected cards
def check_match(btn, idx):
    global first_card, first_button, matches_found, attempts

    # Disable the button and show the card value
    btn.config(text=str(cards[idx]), state="disabled")

    # First card selection
    if first_card is None:
        first_card = cards[idx]
        first_button = btn
    else:
        # Second card selection
        if first_card == cards[idx]:  # If cards match
            matches_found += 1
            first_card = None
            first_button = None

            # Check if all matches are found
            if matches_found == 8:
                messagebox.showinfo("Game Over", f"Congratulations! You won in {attempts} attempts!")
        else:  # If cards don't match
            window.after(1000, hide_cards, btn, first_button)
            first_card = None
            first_button = None

        attempts += 1

# Function to hide cards if they don't match
def hide_cards(btn1, btn2):
    btn1.config(text="?", state="normal")
    btn2.config(text="?", state="normal")

# Create the buttons for the game board (4x4 grid)
buttons = []
for i in range(16):
    btn = tk.Button(window, text="?", width=10, height=3, 
                    command=lambda i=i: check_match(buttons[i], i))
    btn.grid(row=i // 4, column=i % 4)
    buttons.append(btn)

# Start the game
window.mainloop()
