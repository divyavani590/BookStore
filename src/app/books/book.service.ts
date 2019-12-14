import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksChanged = new Subject<Book[]>();

  private books: Book[] = [];

  constructor(private http: HttpClient) { }

  addRecipe(book: Book) {
    this.http.post('https://bookstore-70a26.firebaseio.com/book.json', this.books).subscribe(
      response => { console.log(response); }
    );
  }

  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.http.push('https://bookstore-70a26.firebaseio.com/book.json', this.books).subscribe(
      response => { console.log(response); }
    );
    this.booksChanged.next(this.books.slice());
  }

  getBooks(): Book[] {
    this.http.get('https://bookstore-70a26.firebaseio.com/book.json', this.books).subscribe(
      response => { console.log(response); }
    );
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.http.delete('https://bookstore-70a26.firebaseio.com/book.json').subscribe(
      response => { console.log(response); }
    );
    this.booksChanged.next(this.books.slice());
  }
}
