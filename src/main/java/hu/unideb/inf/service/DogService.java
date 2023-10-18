package hu.unideb.inf.service;

import hu.unideb.inf.dto.DogDto;

import java.util.List;

public interface DogService {

    List<DogDto> findAll();
    DogDto findById(Integer id);
    DogDto saveDog(DogDto dogDto);
    void deleteDog(Integer id);
    boolean isValidId(int id);
}
