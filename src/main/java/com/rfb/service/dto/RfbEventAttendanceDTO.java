package com.rfb.service.dto;
import java.time.LocalDate;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.rfb.domain.RfbEventAttendance} entity.
 */
public class RfbEventAttendanceDTO implements Serializable {

    private Long id;

    private LocalDate attendanceDate;

    private RfbEventDTO rfbEventDTO;

    private RfbUserDTO rfbUserDTO;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public RfbEventDTO getRfbEventDTO() {
        return rfbEventDTO;
    }

    public void setRfbEventDTO(RfbEventDTO rfbEventDTO) {
        this.rfbEventDTO = rfbEventDTO;
    }

    public RfbUserDTO getRfbUserDTO() {
        return rfbUserDTO;
    }

    public void setRfbUserDTO(RfbUserDTO rfbUserDTO) {
        this.rfbUserDTO = rfbUserDTO;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        RfbEventAttendanceDTO rfbEventAttendanceDTO = (RfbEventAttendanceDTO) o;
        if (rfbEventAttendanceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), rfbEventAttendanceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "RfbEventAttendanceDTO{" +
            "id=" + getId() +
            ", attendanceDate='" + getAttendanceDate() + "'" +
            ", rfbEvent=" + getRfbEventDTO() +
            ", rfbUser=" + getRfbUserDTO() +
            "}";
    }
}
