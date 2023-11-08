package hu.unideb.inf.service.impl;

import hu.unideb.inf.dto.ShelterDto;
import hu.unideb.inf.entity.Dog;
import hu.unideb.inf.entity.Shelter;
import hu.unideb.inf.repository.DogRepository;
import hu.unideb.inf.repository.ShelterRepository;
import hu.unideb.inf.service.ShelterService;
import hu.unideb.inf.service.mapper.ShelterMapper;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class ShelterServiceImpl implements ShelterService {

    private final ShelterRepository shelterRepository;

    private final DogRepository dogRepository;

    private final ShelterMapper shelterMapper;

    @Override
    public List<ShelterDto> findAll() {

        List<Shelter> entities = shelterRepository.findAll();
        return shelterMapper.entityListToDtoList(entities);
    }

    @Override
    public ShelterDto findById(Integer id) {

        Optional<Shelter> shelter = shelterRepository.findById(id);
        if (shelter.isEmpty()) {
            throw new EntityNotFoundException("No Shelter Entity Found By ID: " + id);
        }
        return shelterMapper.entityToDto(shelter.get());
    }

    @Override
    public ShelterDto saveShelter(ShelterDto shelterDto) {

        Shelter shelter = shelterMapper.dtoToEntity(shelterDto);
        shelter = shelterRepository.save(shelter);
        return shelterMapper.entityToDto(shelter);
    }

    @Override
    public void deleteShelter(Integer id) {

        if (!isValidId(id)) {
            throw new EntityNotFoundException("No Shelter Entity Found By ID: " + id);
        }
        List<Dog> dogs = dogRepository.findAllByShelterShelterIdAndIsAvailableForAdoptionTrue(id);
        for (Dog dog: dogs) {
            dog.setShelter(null);
        }
        dogRepository.saveAll(dogs);
        shelterRepository.deleteById(id);
    }

    @Override
    public boolean isValidId(int id) {

        return shelterRepository.existsById(id);
    }
}
