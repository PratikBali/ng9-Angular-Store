import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { BookService } from './book.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

export class BooksModel {
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
      console.log(books);
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
    console.log(this.bookModel);
  }

  edit(id) {
    let d = this.bookList.find(a => { return a.id });
    console.log(d);

  }

  delete(id) {

  }

}
