package hu.unideb.inf.service;

import hu.unideb.inf.dto.ShelterDto;

import java.util.List;

public interface ShelterService {

    List<ShelterDto> findAll();
    ShelterDto findById(Integer id);
    ShelterDto saveShelter(ShelterDto shelterDto);
    void deleteShelter(Integer id);
    boolean isValidId(int id);
}
