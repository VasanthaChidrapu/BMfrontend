import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book'
import { BookService } from '../book.service';
import { Genre } from '../genre';
import { Publisher } from '../publisher';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  // //change remove all below
  // genres: string[] = [];
  // publishers: string[] = [];
  // selectedGenre: string | null = null;
  // selectedPublisher: string | null = null;
  // //remove genre and publisher services in constructor
  constructor(private bookService: BookService, private router: Router) { }
  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks() {
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
      console.log(this.books);
    });
  }
  goToAddBook() {
    this.router.navigate(['save-book']);
  }
  bookDetails(book_id: number) {
    this.router.navigate(['book-details', book_id]);
  }
  updateBook(book_id: number) {
    this.router.navigate(['update-book', book_id]);
  }

  deleteBook(book_id: number) {
    if (confirm("Are you sure you want to delete this book?")) {
      // Delete the book here
      // You can use this to get a reference to the row that the button was clicked in:
      // var row = event.target.closest("tr");
      this.bookService.deleteBook(book_id).subscribe(data => {
        console.log(data);
        this.getBooks();
      })
    }


  }

}
