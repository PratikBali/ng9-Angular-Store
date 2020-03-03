import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { BookService } from './book.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

export class BooksModel {
  id;
  title;
  description;
  publishdate;
  excerpt;
  pagecount;
}

// export class BooksList {
//   ID
//   Title;
//   Description;
//   PublishDate;
//   Excerpt;
//   PageCount;
// }

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookModel = new BooksModel();
  bookList = [];
  bsValue = "Published Date";
  paginatedBooks: any[];
  // ID
  // Title
  // Description
  // PageCount
  // Excerpt
  // PublishDate

  constructor(private router: Router, private cdRef: ChangeDetectorRef, private bookService: BookService) { }

  ngOnInit(): void {
    let bookData
    this.bookService.getBooks().subscribe(books => {
      bookData = books;
      this.bookList = bookData;

      this.paginatedBooks = this.bookList.slice(0, 10);
    })
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginatedBooks = this.bookList.slice(startItem, endItem);
  }

  logout() {
    this.router.navigate(['']);
  }

  addBook() {
    this.clear()
  }

  getBookForEdit(id) {
    let book = this.bookList.find(book => book.ID === id);

    this.bookModel.id = book.ID;
    this.bookModel.description = book.Title;
    this.bookModel.excerpt = book.Excerpt;
    this.bookModel.publishdate = book.PublishDate;
    this.bookModel.title = book.Title;
    this.bookModel.pagecount = book.PageCount;

  }

  edit() {
    let id = this.bookModel.id;
    this.bookService.edit(id, this.bookModel)
  }

  clear() {
    this.bookModel.description = '';
    this.bookModel.excerpt = '';
    this.bookModel.publishdate = '';
    this.bookModel.title = '';
    this.bookModel.pagecount = '';
  }

  delete(id) {
    const result = confirm('Are you sure to delete this book?')
    if (result) {
      // api
      this.bookService.delete(id)
    }
  }

}
