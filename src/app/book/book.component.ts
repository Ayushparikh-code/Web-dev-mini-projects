import { Component } from '@angular/core';
import { book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  bookTitle: string = "";
  bookAuthor: string = "";
  bookType: string = "";

  booksList: book[] = []

  ngOnInit(){
    const savedBooks = localStorage.getItem("booksList")
    this.booksList = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook(){
    if(this.bookTitle.trim().length && this.bookAuthor.trim().length){
      const newBook: book = {
        id: Date.now(),
        title: this.bookTitle,
        author: this.bookAuthor,
        genre: this.bookType
      }
      this.booksList.push(newBook);

      this.bookTitle = "";
      this.bookAuthor = "";
      this.bookType = "";

      localStorage.setItem("booksList",JSON.stringify(this.booksList))
    }
  }

  deleteBook(index : number){
    this.booksList.splice(index, 1);
    localStorage.setItem("booksList",JSON.stringify(this.booksList))
  }
}
