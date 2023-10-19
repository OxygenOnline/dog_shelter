package hu.unideb.inf.repository;

import hu.unideb.inf.entity.Dog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogRepository extends JpaRepository<Dog, Integer> {

    List<Dog> findAllByShelterShelterIdAndIsAvailableForAdoptionTrue(Integer id);
}
