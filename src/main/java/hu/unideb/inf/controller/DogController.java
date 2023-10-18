package hu.unideb.inf.controller;

import hu.unideb.inf.dto.DogDto;
import hu.unideb.inf.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dogs")
public class DogController {

    @Autowired
    DogService dogService;

    @GetMapping("")
    public ResponseEntity<List<DogDto>> getAllDogs() {

        List<DogDto> dogs = dogService.findAll();
        return new ResponseEntity<>(dogs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DogDto> getDogById(@PathVariable Integer id) {

        if (!dogService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        DogDto dogDto = dogService.findById(id);
        return new ResponseEntity<>(dogDto, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<DogDto> createDog(@RequestBody DogDto dog) {

        DogDto dogDto = dogService.saveDog(dog);
        return new ResponseEntity<>(dogDto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DogDto> updateDog(@RequestBody DogDto dog, @PathVariable Integer id) {

        if (!dogService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        dog.setDogId(id);
        DogDto dogDto = dogService.saveDog(dog);
        return new ResponseEntity<>(dogDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDog(@PathVariable Integer id) {

        if (!dogService.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        dogService.deleteDog(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
