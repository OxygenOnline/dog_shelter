package hu.unideb.inf.service.mapper;

import hu.unideb.inf.dto.ShelterDto;
import hu.unideb.inf.entity.Shelter;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ShelterMapper {

    ShelterMapper INSTANCE = Mappers.getMapper(ShelterMapper.class);
    ShelterDto entityToDto(Shelter shelter);
    Shelter dtoToEntity(ShelterDto shelterDto);
    List<ShelterDto> entityListToDtoList(List<Shelter> shelterList);
}
