import { Moment } from 'moment';
import { RfbEvent } from 'app/shared/model/rfb-event.model';
import { RfbUser } from 'app/shared/model/rfb-user.model';

export interface IRfbEventAttendance {
  id?: number;
  attendanceDate?: any;
  rfbEventDTO?: RfbEvent;
  rfbUserDTO?: RfbUser;
}

export class RfbEventAttendance implements IRfbEventAttendance {
  constructor(public id?: number, public attendanceDate?: Moment, public rfbEventId?: number, public rfbUserId?: number) {}
}
