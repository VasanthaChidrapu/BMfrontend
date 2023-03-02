import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Genre } from './genre';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private apiURL = "http://localhost:8585/api/books"
  private genreUrl = 'http://localhost:8585/api/genres';
  private publisherUrl = 'http://localhost:8585/api/publishers'
  constructor(private httpClient: HttpClient) { }
  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiURL}`);
  }
  saveBook(genereId: any, publisherId: any, book: Book): Observable<Object> {
    return this.httpClient.post(`${this.apiURL}` + "/" + genereId + "/" + publisherId, book);
  }

  getBookById(book_id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiURL}/${book_id}`);
  }

  updateBook(book_id: number, book: Book): Observable<Object> {
    return this.httpClient.put(`${this.apiURL}/${book_id}`, book);
  }
  deleteBook(book_id: number): Observable<Object> {
    return this.httpClient.delete(`${this.apiURL}/${book_id}`);
  }
  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(this.genreUrl);
  }
  getPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(this.publisherUrl);
  }
}

