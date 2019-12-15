package com.hello.world.restapp;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/HelloWorld")
public class HelloWorldController {

    @RequestMapping(path = "/getBook", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}, method = RequestMethod.GET)
    public Book getBook() {
//        String title;
//        int page = 90;
//        if (RestappApplication.Data.book.getTitle() != null) {
//            title = RestappApplication.Data.book.getTitle();
//            page = RestappApplication.Data.book.getPages();
//        }
//        else {
//            title = "NEW BOOK";
//        }
//        Book book = new Book(title, page);
        return RestappApplication.Data.getBook();
    }

    @RequestMapping(path = "/createBook", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public Book createBook(@RequestBody Book book) {
        RestappApplication.Data.setBook(book);
        return RestappApplication.Data.getBook();
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String ping() {
        return "Hello world!";
    }
}
