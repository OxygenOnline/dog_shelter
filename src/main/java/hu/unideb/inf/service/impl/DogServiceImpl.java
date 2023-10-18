package hu.unideb.inf.service.impl;

import hu.unideb.inf.dto.DogDto;
import hu.unideb.inf.entity.Dog;
import hu.unideb.inf.repository.DogRepository;
import hu.unideb.inf.service.DogService;
import hu.unideb.inf.service.mapper.DogMapper;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogServiceImpl implements DogService {

    @Autowired
    DogRepository dogRepository;

    @Autowired
    DogMapper dogMapper;

    @Override
    public List<DogDto> findAll() {

        List<Dog> entities = dogRepository.findAll();
        return dogMapper.entityListToDtoList(entities);
    }

    @Override
    public DogDto findById(Integer id) {

        Optional<Dog> dog = dogRepository.findById(id);
        if (dog.isEmpty()) {
            throw new EntityNotFoundException("No Dog Entity Found By ID: " + id);
        }
        return dogMapper.entityToDto(dog.get());
    }

    @Override
    public DogDto saveDog(DogDto dogDto) {

        Dog dog = dogMapper.dtoToEntity(dogDto);
        dog = dogRepository.save(dog);
        return dogMapper.entityToDto(dog);
    }

    @Override
    public void deleteDog(Integer id) {

        dogRepository.deleteById(id);
    }

    @Override
    public boolean isValidId(int id) {

        return dogRepository.existsById(id);
    }
}
