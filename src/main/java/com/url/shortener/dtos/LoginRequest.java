package com.url.shortener.dtos;

import lombok.Data;

import java.util.Set;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
