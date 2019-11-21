package com.hello.world.restapp;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping(path = "/HelloWorld")
public class HelloWorldController {

    @RequestMapping(path = "/getBook", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}, method = RequestMethod.GET)
    public Book getBook() {
        Book book = new Book("new Book", 90);
        return book;
    }

    @RequestMapping(path = "/createBook", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public Book createBook(@RequestBody Book book) {
        return new Book(book);
    }
}
