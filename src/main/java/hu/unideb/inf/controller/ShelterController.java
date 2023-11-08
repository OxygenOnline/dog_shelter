package hu.unideb.inf.controller;

import hu.unideb.inf.dto.ShelterDto;
import hu.unideb.inf.service.ShelterService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/shelters")
@AllArgsConstructor
public class ShelterController {

    private final ShelterService shelterService;

    @GetMapping("")
    public ResponseEntity<List<ShelterDto>> getAllShelters() {

        List<ShelterDto> shelters = shelterService.findAll();
        return new ResponseEntity<>(shelters, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShelterDto> getShelterById(@PathVariable Integer id) {

        if (!shelterService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        ShelterDto shelterDto = shelterService.findById(id);
        return new ResponseEntity<>(shelterDto, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ShelterDto> createShelter(@RequestBody ShelterDto shelter) {

        ShelterDto shelterDto = shelterService.saveShelter(shelter);
        return new ResponseEntity<>(shelterDto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShelterDto> updateShelter(@RequestBody ShelterDto shelter, @PathVariable Integer id) {

        if (!shelterService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        shelter.setShelterId(id);
        ShelterDto shelterDto = shelterService.saveShelter(shelter);
        return new ResponseEntity<>(shelterDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShelter(@PathVariable Integer id) {

        if (!shelterService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        shelterService.deleteShelter(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
