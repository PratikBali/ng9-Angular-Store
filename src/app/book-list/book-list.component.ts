import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { BookService } from './book.service';

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
    })
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  logout() {
    this.router.navigate(['']);
  }

  addBook() {
    console.log(this.bookModel);
  }

}
