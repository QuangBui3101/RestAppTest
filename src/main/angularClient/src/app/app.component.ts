import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { xml2json } from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;

  header = new HttpHeaders({ ContentType: 'application/xml' }).set('Accept', 'application/xml');

  constructor(private httpClient: HttpClient) {
    this.title = 'angularClient';

  }

  OnClick() {
    this.httpClient
      .get<string>('http://localhost:5000/HelloWorld/getBook', { headers: this.header, responseType: 'text' as 'json' })
      .subscribe(r => {
        console.log(r);
        const result = xml2json(r, { compact: true, spaces: 2 });
        const book = JSON.parse(result);
        console.log(book.Book.title);
        this.title = book.Book.title;
      },
        error => console.log(error)
      );
  }
}
