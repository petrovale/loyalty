import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyaltySharedModule } from 'app/shared/shared.module';
import { RfbLocationComponent } from './rfb-location.component';
import { RfbLocationDetailComponent } from './rfb-location-detail.component';
import { RfbLocationUpdateComponent } from './rfb-location-update.component';
import { RfbLocationDeletePopupComponent, RfbLocationDeleteDialogComponent } from './rfb-location-delete-dialog.component';
import { rfbLocationRoute, rfbLocationPopupRoute } from './rfb-location.route';

const ENTITY_STATES = [...rfbLocationRoute, ...rfbLocationPopupRoute];

@NgModule({
  imports: [LoyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RfbLocationComponent,
    RfbLocationDetailComponent,
    RfbLocationUpdateComponent,
    RfbLocationDeleteDialogComponent,
    RfbLocationDeletePopupComponent
  ],
  entryComponents: [RfbLocationDeleteDialogComponent]
})
export class LoyaltyRfbLocationModule {}
