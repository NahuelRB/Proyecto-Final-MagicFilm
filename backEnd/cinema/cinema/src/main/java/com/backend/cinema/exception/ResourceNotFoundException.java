package com.backend.cinema.exception;

public class ResourceNotFoundException extends Exception {
    public ResourceNotFoundException(String message){
        super(message);
    }
}
