import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

export class Books {
  title;
  description;
  publishdate;
  excerpt;
  pagecount;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookModel = new Books();
  bsValue = "Published Date";

  constructor(private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  logout() {
    this.router.navigate(['']);
  }

  addBook() {

  }

}
