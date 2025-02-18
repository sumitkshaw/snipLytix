package com.url.shortener.dtos;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ClickEventDTO {
    private LocalDate clickDate;
    private Long count;
}
