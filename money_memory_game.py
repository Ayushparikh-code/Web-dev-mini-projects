import random
import tkinter as tk
from tkinter import messagebox

# ------------------------
# Enhanced Money Memory Game
# ------------------------

class MemoryGame:
    def __init__(self, master):
        self.master = master
        master.title("Money Memory Game")
        master.geometry("460x500")
        master.resizable(False, False)

        self.score = 0
        self.attempts = 0
        self.matches_found = 0
        self.first_card_idx = None
        self.locked = False

        # Main frame for padding and flexibility
        self.frame = tk.Frame(master, pady=20)
        self.frame.pack()

        # Status bar
        self.status = tk.Label(master, text='', font=('Arial', 14), fg='green')
        self.status.pack(pady=10)
        self.update_status()

        # Restart button
        restart_btn = tk.Button(master, text="Restart", command=self.restart_game, bg='#ffd700', font=('Arial', 12))
        restart_btn.pack(pady=5)

        # Game board initialization
        self.create_board()

    def create_board(self):
        self.cards = list(range(1, 9)) * 2  # Money values
        random.shuffle(self.cards)
        self.button_refs = []

        # Draw grid
        for widget in self.frame.winfo_children():
            widget.destroy()
        for i in range(16):
            btn = tk.Button(self.frame, text="?", font=('Arial', 18, 'bold'), width=6, height=3,
                            bg="#336699", fg="white", relief="raised",
                            command=lambda i=i: self.reveal_card(i))
            btn.grid(row=i // 4, column=i % 4, padx=5, pady=5)
            self.button_refs.append(btn)

    def update_status(self):
        accuracy = f"{(self.matches_found / self.attempts * 100):.1f}%" if self.attempts else "0%"
        self.status.config(text=f"Attempts: {self.attempts} | Matches: {self.matches_found}/8 | Accuracy: {accuracy}")

    def reveal_card(self, idx):
        if self.locked or self.button_refs[idx]["state"] == "disabled":
            return

        btn = self.button_refs[idx]
        btn.config(text=f"₹{self.cards[idx]}", bg="#9ACD32", fg="black", relief="sunken")
        btn.update()

        if self.first_card_idx is None:
            self.first_card_idx = idx
        else:
            self.locked = True
            self.attempts += 1
            first_btn = self.button_refs[self.first_card_idx]
            second_btn = btn
            if self.cards[self.first_card_idx] == self.cards[idx]:
                # Match
                self.matches_found += 1
                first_btn.config(bg="#ffd700", fg="darkgreen", relief="flat")
                second_btn.config(bg="#ffd700", fg="darkgreen", relief="flat")
                first_btn.config(state="disabled")
                second_btn.config(state="disabled")
                self.master.after(400, self.after_match)
            else:
                # No match, flip back after delay
                self.master.after(1100, self.hide_cards, self.first_card_idx, idx)
            self.first_card_idx = None
            self.update_status()

    def hide_cards(self, idx1, idx2):
        for idx in [idx1, idx2]:
            self.button_refs[idx].config(text="?", bg="#336699", fg="white", relief="raised", state="normal")
        self.locked = False

    def after_match(self):
        self.locked = False
        if self.matches_found == 8:
            self.update_status()
            messagebox.showinfo("🎉 Game Over", f"Congratulations! You found all matches in {self.attempts} attempts!")
            self.play_sound_win()

    def restart_game(self):
        self.score = 0
        self.attempts = 0
        self.matches_found = 0
        self.first_card_idx = None
        self.locked = False
        self.button_refs = []
        self.create_board()
        self.update_status()

    def play_sound_win(self):
        # Simple sound feedback for successful completion
        try:
           try:
    import winsound
    winsound.Beep(600, 250)
    winsound.Beep(800, 450)
except (ImportError, RuntimeError, AttributeError):
    # winsound not available, skip sound
    pass


if __name__ == "__main__":
    root = tk.Tk()
    game = MemoryGame(root)
    root.mainloop()
