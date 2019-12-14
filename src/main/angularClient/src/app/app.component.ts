import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from 'src/Entities/Book';
import * as xml2js from 'xml2js';

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

  constructor(private httpClient: HttpClient) {
    this.title = 'angularClient';

  }

  OnClick() {
    this.httpClient
      .get<string>('http://localhost:5000/HelloWorld/getBook', { headers: this.header, responseType: 'text' as 'json' })
      .subscribe(r => {
        console.log(r);
        var book: Book;
        // var xml2js = require('xml2js');
        var parser = new xml2js.Parser(
          {
            valueProcessors: [xml2js.processors.parseNumbers],
            explicitArray: false,
            explicitRoot: false
          }
        );
        parser.parseString(r, (err, result: Book) => {
          console.log(result);
          book = result;
          console.log(book.title);
        });
        var builder = new xml2js.Builder({ explicitRoot: true, headless: true });

        this.xmlBook = builder.buildObject(book);
        console.log(this.xmlBook);
      },
        error => console.log(error)
      );
  }

  OnClick1() {
    this.httpClient
      .post('http://localhost:5000/HelloWorld/createBook', this.xmlBook, { headers: this.header1, responseType: 'text' as 'json' })
      .subscribe(r => {
        console.log(r);
      });
  }
}
