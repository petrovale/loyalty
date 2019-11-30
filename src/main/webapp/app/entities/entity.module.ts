import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'rfb-location',
        loadChildren: () => import('./rfb-location/rfb-location.module').then(m => m.LoyaltyRfbLocationModule)
      },
      {
        path: 'rfb-event',
        loadChildren: () => import('./rfb-event/rfb-event.module').then(m => m.LoyaltyRfbEventModule)
      },
      {
        path: 'rfb-event-attendance',
        loadChildren: () => import('./rfb-event-attendance/rfb-event-attendance.module').then(m => m.LoyaltyRfbEventAttendanceModule)
      },
      {
        path: 'rfb-user',
        loadChildren: () => import('./rfb-user/rfb-user.module').then(m => m.LoyaltyRfbUserModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class LoyaltyEntityModule {}
