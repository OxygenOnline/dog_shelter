package hu.unideb.inf.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.util.List;

@Entity
@Data
@SQLDelete(sql = "UPDATE SHELTER SET is_active = false WHERE shelter_id =?")
@Where(clause = "is_active = true")
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

    @OneToMany(mappedBy = "shelter")
    private List<Dog> dogList;

    @NotNull
    private Boolean isActive = true;
}
