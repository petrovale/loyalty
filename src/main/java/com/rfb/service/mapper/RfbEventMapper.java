package com.rfb.service.mapper;

import com.rfb.domain.*;
import com.rfb.service.dto.RfbEventDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link RfbEvent} and its DTO {@link RfbEventDTO}.
 */
@Mapper(componentModel = "spring", uses = {RfbLocationMapper.class})
public interface RfbEventMapper extends EntityMapper<RfbEventDTO, RfbEvent> {

    @Mapping(source = "rfbLocation", target = "rfbLocationDTO")
    RfbEventDTO toDto(RfbEvent rfbEvent);

    @Mapping(target = "rfbEventAttendances", ignore = true)
    @Mapping(target = "removeRfbEventAttendance", ignore = true)
    @Mapping(source = "rfbLocationDTO", target = "rfbLocation")
    RfbEvent toEntity(RfbEventDTO rfbEventDTO);

    default RfbEvent fromId(Long id) {
        if (id == null) {
            return null;
        }
        RfbEvent rfbEvent = new RfbEvent();
        rfbEvent.setId(id);
        return rfbEvent;
    }
}
