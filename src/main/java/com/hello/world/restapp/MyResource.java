package com.hello.world.restapp;

import org.eclipse.californium.core.CoapResource;
import org.eclipse.californium.core.coap.CoAP.ResponseCode;
import org.eclipse.californium.core.server.resources.CoapExchange;

public class MyResource extends CoapResource {
    public MyResource(String name) {
        super(name);
    }

    @Override
    public void handleGET(CoapExchange exchange) {
        exchange.respond("hello, my name is Quang");
    }

    @Override
    public void handlePOST(CoapExchange exchange) {
        exchange.accept();

        System.out.println(exchange.getRequestOptions());

        exchange.respond(ResponseCode.CREATED);
    }
}
