package hu.unideb.inf.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DOG")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
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

    private Gender gender;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELTER_ID")
    private Shelter shelterId;

    @NotNull
    private Boolean isAvailableForAdoption = true;
}
