package hu.unideb.inf.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Data
@SQLDelete(sql = "UPDATE shelter SET is_active = false WHERE shelter_id =?")
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
    @Column(unique = true)
    private String email;

    @NotNull
    private Boolean isActive = true;
}
