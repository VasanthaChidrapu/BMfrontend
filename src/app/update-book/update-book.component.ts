import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  //myOptions = ['Romance', 'Mystery', 'Science Fiction', 'Fantasy', 'Devotional'];
  //Book = { book_genre: '' };
  'book_id':number;
  book:Book = new Book();
  constructor(private bookService:BookService, 
    private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.book_id = this.route.snapshot.params['book_id'];
    this.bookService.getBookById(this.book_id).subscribe(data => {
      this.book = data;
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.book);
    this.bookService.updateBook(this.book_id,this.book).subscribe( data => {
    this.goToBookList();
    },
    error => console.log(error));
    
  }
  goToBookList(){
    this.router.navigate(['/books']);
  }
}
