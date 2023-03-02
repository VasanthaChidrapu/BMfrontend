import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  'book_id':number
   book:Book = new Book();
  constructor(private route:ActivatedRoute,private bookService:BookService){}
  ngOnInit(): void {
   this.book_id = this.route.snapshot.params['book_id'];
   this.book = new Book();
   this.bookService.getBookById(this.book_id).subscribe( data => 
    {
      this.book = data;
    });
  }

}
