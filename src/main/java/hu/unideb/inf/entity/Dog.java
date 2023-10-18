package hu.unideb.inf.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Data
@SQLDelete(sql = "UPDATE DOG SET is_available_for_adoption = false WHERE id =?")
@Where(clause = "is_available_for_adoption = true")
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer dogId;

    @NotBlank
    private String dogName;

    private String breed;

    @Min(value = 1900)
    @Max(value = 2100)
    private Integer birthYear;

    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shelter_id")
    private Shelter shelter;

    @NotNull
    private Boolean isAvailableForAdoption = true;
}
