package hu.unideb.inf.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class DogDto {

    private int dogId;
    private String dogName;
    private String breed;
    private int birthYear;
    private String gender;
    private int shelterId;
    private boolean isAvailableForAdoption;
}
