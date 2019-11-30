import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyaltySharedModule } from 'app/shared/shared.module';
import { RfbEventComponent } from './rfb-event.component';
import { RfbEventDetailComponent } from './rfb-event-detail.component';
import { RfbEventUpdateComponent } from './rfb-event-update.component';
import { RfbEventDeletePopupComponent, RfbEventDeleteDialogComponent } from './rfb-event-delete-dialog.component';
import { rfbEventRoute, rfbEventPopupRoute } from './rfb-event.route';

const ENTITY_STATES = [...rfbEventRoute, ...rfbEventPopupRoute];

@NgModule({
  imports: [LoyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RfbEventComponent,
    RfbEventDetailComponent,
    RfbEventUpdateComponent,
    RfbEventDeleteDialogComponent,
    RfbEventDeletePopupComponent
  ],
  entryComponents: [RfbEventDeleteDialogComponent]
})
export class LoyaltyRfbEventModule {}
