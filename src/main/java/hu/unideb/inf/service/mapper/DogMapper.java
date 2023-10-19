package hu.unideb.inf.service.mapper;

import hu.unideb.inf.dto.DogDto;
import hu.unideb.inf.entity.Dog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface DogMapper {

    DogMapper INSTANCE = Mappers.getMapper(DogMapper.class);

    @Mapping(source = "dog.shelter.shelterId", target = "shelterId")
    DogDto entityToDto(Dog dog);

    @Mapping(source = "shelterId", target = "shelter.shelterId")
    Dog dtoToEntity(DogDto dogDto);

    List<DogDto> entityListToDtoList(List<Dog> dogList);

}
