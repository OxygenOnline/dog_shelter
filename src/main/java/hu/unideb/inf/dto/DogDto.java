package hu.unideb.inf.dto;

import lombok.Data;

@Data
public class DogDto {

    private Integer dogId;
    private String dogName;
    private String breed;
    private Integer birthYear;
    private String gender;
    private Integer shelterId;
    private String shelterName;
}
