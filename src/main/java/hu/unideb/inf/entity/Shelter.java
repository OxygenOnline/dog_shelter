package hu.unideb.inf.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer shelterId;

    @NotBlank
    private String shelterName;

    @NotBlank
    private String location;

    @Email
    private String email;

    @OneToMany(mappedBy = "shelterId")
    private List<Dog> dogList;

    @NotBlank
    private Boolean isActive = true;
}
