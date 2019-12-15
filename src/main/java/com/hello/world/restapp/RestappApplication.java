package com.hello.world.restapp;

import org.eclipse.californium.core.CoapServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestappApplication {

    public static Data Data = new Data();

    public static void main(String[] args) {
        SpringApplication.run(RestappApplication.class, args);
        CoapServer coapServer = new CoapServer();
        MyResource resource = new MyResource( "Bla", Data);

        coapServer.add(new MyResource("Hello", Data));
        coapServer.start();
    }

    public static class Data {
        public Book getBook() {
            return book;
        }

        public void setBook(Book book) {
            this.book = book;
        }

        private Book book = new Book(title, page);

//        public static String getTitle() {
//            return title;
//        }
//
//        public static void setTitle(String title) {
//            RestappApplication.Data.title = title;
//        }
//
//        public static int getPage() {
//            return page;
//        }
//
//        public static void setPage(int page) {
//            RestappApplication.Data.page = page;
//        }

        private static String title = "DefaultTitle";
        private static int page = 0;
    }
}
