import { Observable, of } from 'rxjs';
import { Book } from './../../Entities/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  header = new HttpHeaders().set('Content-Type', 'application/xml').set('Accept', 'application/xml');;
  parser = new xml2js.Parser(
    {
      valueProcessors: [xml2js.processors.parseNumbers],
      explicitArray: false,
      explicitRoot: false
    }
  );
  builder = new xml2js.Builder({ explicitRoot: true, headless: true });

  constructor(private httpClient: HttpClient) {
  }

  getBook(): Observable<Book> {
    // let book: Book = new Book();
    return this.httpClient
      .get<string>('http://localhost:5000/HelloWorld/getBook', { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  private parseObjectFromXml(xmlString: string): any {
    let object;
    this.parser.parseString(xmlString, (err, result: any) => {
      object = result;
    });
    return object;
  }

  createBook(name: string): Observable<Book> {
    let book: Book = new Book();
    book.title = name;
    book.pages = 100;

    let xmlBook = this.builder.buildObject(book);


    return this.httpClient
      .post<string>('http://localhost:5000/HelloWorld/createBook', xmlBook, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }
}


