import { BookService } from './service/book.service';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from 'src/Entities/Book';
import * as xml2js from 'xml2js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;

  header = new HttpHeaders({ ContentType: 'application/xml' }).set('Accept', 'application/xml');
  header1 = new HttpHeaders().set('Content-Type', 'application/xml').set('Accept', 'application/xml');

  xmlBook: any;

  constructor(private httpClient: HttpClient, private bookService: BookService) {
    this.title = 'angularClient';
  }
}
