import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title: string;
  titleInput: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    interval(2000)
      .pipe(startWith(0), switchMap(() => this.bookService.getBook()))
      .subscribe(res => this.title = res.title);
  }

  OnClick() {
    this.bookService.getBook().subscribe(r => {
      console.log(r);
      this.title = r.title;
    });
  }

  OnClick1() {
    this.bookService.createBook(this.titleInput).subscribe(r => {
      console.log('Create Book');
      console.log(r);
    });
  }
}
