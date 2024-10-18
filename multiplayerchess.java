import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ChessGame {
    private JFrame frame;
    private JButton[][] boardButtons;
    private String currentPlayer = "White";

    public ChessGame() {
        frame = new JFrame("Multiplayer Chess Game");
        boardButtons = new JButton[8][8];
        frame.setLayout(new GridLayout(8, 8));
        initializeBoard();
        frame.setSize(600, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    // Initialize the board with buttons
    private void initializeBoard() {
        for (int row = 0; row < 8; row++) {
            for (int col = 0; col < 8; col++) {
                JButton button = new JButton();
                button.setBackground((row + col) % 2 == 0 ? Color.WHITE : Color.GRAY);
                button.setOpaque(true);
                button.setBorderPainted(false);
                boardButtons[row][col] = button;
                button.addActionListener(new ButtonClickListener(row, col));
                frame.add(button);
            }
        }
        setupInitialPieces();
    }

    // Set up the initial positions of the pieces
    private void setupInitialPieces() {
        // For simplicity, setting up only pawns. Add other pieces as needed.
        for (int col = 0; col < 8; col++) {
            boardButtons[1][col].setText("P"); // Black pawns
            boardButtons[6][col].setText("P"); // White pawns
        }
        // Add other pieces (King, Queen, Rook, Knight, Bishop) here
    }

    // Handle button click events
    private class ButtonClickListener implements ActionListener {
        private int row;
        private int col;

        public ButtonClickListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            JButton clickedButton = boardButtons[row][col];
            if (clickedButton.getText().isEmpty()) {
                System.out.println(currentPlayer + " clicked on an empty square at (" + row + ", " + col + ")");
            } else {
                System.out.println(currentPlayer + " clicked on a piece at (" + row + ", " + col + ")");
            }
            switchPlayer();
        }
    }

    // Switch the current player
    private void switchPlayer() {
        currentPlayer = currentPlayer.equals("White") ? "Black" : "White";
        System.out.println("Current player: " + currentPlayer);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(ChessGame::new);
    }
}
