import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class OnlineBookShop {
    private JFrame frame;
    private JList<String> bookList;
    private DefaultListModel<String> bookListModel;
    private JTextArea bookDetails;
    private ArrayList<Book> books;

    public OnlineBookShop() {
        books = new ArrayList<>();
        initializeBooks();
        setupUI();
    }

    private void initializeBooks() {
        books.add(new Book("The Great Gatsby", "F. Scott Fitzgerald", 10.99));
        books.add(new Book("1984", "George Orwell", 8.99));
        books.add(new Book("To Kill a Mockingbird", "Harper Lee", 12.99));
        books.add(new Book("The Catcher in the Rye", "J.D. Salinger", 9.99));
    }

    private void setupUI() {
        frame = new JFrame("Online Book Shop");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout());

        // Book List
        bookListModel = new DefaultListModel<>();
        for (Book book : books) {
            bookListModel.addElement(book.getTitle());
        }
        bookList = new JList<>(bookListModel);
        bookList.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        bookList.addListSelectionListener(e -> showBookDetails());

        // Book Details Area
        bookDetails = new JTextArea();
        bookDetails.setEditable(false);

        // Add Components to Frame
        frame.add(new JScrollPane(bookList), BorderLayout.WEST);
        frame.add(new JScrollPane(bookDetails), BorderLayout.CENTER);
        frame.add(createBuyButton(), BorderLayout.SOUTH);

        frame.setVisible(true);
    }

    private JButton createBuyButton() {
        JButton buyButton = new JButton("Buy Selected Book");
        buyButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int index = bookList.getSelectedIndex();
                if (index != -1) {
                    JOptionPane.showMessageDialog(frame, "You bought: " + books.get(index).getTitle());
                } else {
                    JOptionPane.showMessageDialog(frame, "Please select a book to buy.");
                }
            }
        });
        return buyButton;
    }

    private void showBookDetails() {
        int index = bookList.getSelectedIndex();
        if (index != -1) {
            Book selectedBook = books.get(index);
            bookDetails.setText(selectedBook.toString());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(OnlineBookShop::new);
    }

    // Book class to hold book information
    private static class Book {
        private String title;
        private String author;
        private double price;

        public Book(String title, String author, double price) {
            this.title = title;
            this.author = author;
            this.price = price;
        }

        public String getTitle() {
            return title;
        }

        @Override
        public String toString() {
            return "Title: " + title + "\nAuthor: " + author + "\nPrice: $" + price;
        }
    }
}
