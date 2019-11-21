package com.hello.world.restapp;

import org.eclipse.californium.core.CoapServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestappApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestappApplication.class, args);
        CoapServer coapServer = new CoapServer();
        MyResource resource = new MyResource( "Bla");

        coapServer.add(new MyResource("Hello"));
        coapServer.start();
    }

}
