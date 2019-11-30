import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyaltySharedModule } from 'app/shared/shared.module';
import { RfbEventAttendanceComponent } from './rfb-event-attendance.component';
import { RfbEventAttendanceDetailComponent } from './rfb-event-attendance-detail.component';
import { RfbEventAttendanceUpdateComponent } from './rfb-event-attendance-update.component';
import {
  RfbEventAttendanceDeletePopupComponent,
  RfbEventAttendanceDeleteDialogComponent
} from './rfb-event-attendance-delete-dialog.component';
import { rfbEventAttendanceRoute, rfbEventAttendancePopupRoute } from './rfb-event-attendance.route';

const ENTITY_STATES = [...rfbEventAttendanceRoute, ...rfbEventAttendancePopupRoute];

@NgModule({
  imports: [LoyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RfbEventAttendanceComponent,
    RfbEventAttendanceDetailComponent,
    RfbEventAttendanceUpdateComponent,
    RfbEventAttendanceDeleteDialogComponent,
    RfbEventAttendanceDeletePopupComponent
  ],
  entryComponents: [RfbEventAttendanceDeleteDialogComponent]
})
export class LoyaltyRfbEventAttendanceModule {}
