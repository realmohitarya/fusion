import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BidOverviewComponent } from './bid-overview.component';
// import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [BidOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BidOverviewComponent,
      },
    ]),
    // WidgetsModule,
    // ModalsModule,
    InlineSVGModule,
  ],
})
export class BidOverviewModule {}
