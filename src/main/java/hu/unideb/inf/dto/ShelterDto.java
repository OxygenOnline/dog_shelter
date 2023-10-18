package hu.unideb.inf.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ShelterDto {

    private int shelterId;
    private String shelterName;
    private String location;
    private String email;
    private boolean isActive;
}
