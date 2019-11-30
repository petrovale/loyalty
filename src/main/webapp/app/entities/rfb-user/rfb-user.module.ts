import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyaltySharedModule } from 'app/shared/shared.module';
import { RfbUserComponent } from './rfb-user.component';
import { RfbUserDetailComponent } from './rfb-user-detail.component';
import { RfbUserUpdateComponent } from './rfb-user-update.component';
import { RfbUserDeletePopupComponent, RfbUserDeleteDialogComponent } from './rfb-user-delete-dialog.component';
import { rfbUserRoute, rfbUserPopupRoute } from './rfb-user.route';

const ENTITY_STATES = [...rfbUserRoute, ...rfbUserPopupRoute];

@NgModule({
  imports: [LoyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RfbUserComponent,
    RfbUserDetailComponent,
    RfbUserUpdateComponent,
    RfbUserDeleteDialogComponent,
    RfbUserDeletePopupComponent
  ],
  entryComponents: [RfbUserDeleteDialogComponent]
})
export class LoyaltyRfbUserModule {}
