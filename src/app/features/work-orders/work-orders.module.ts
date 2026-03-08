import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { WorkOrdersComponent } from './work-orders.component';
import { TimescaleDropdownComponent } from './components/timescale-dropdown/timescale-dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: WorkOrdersComponent,
  },
];

@NgModule({
  declarations: [WorkOrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    TimescaleDropdownComponent,
  ],
})
export class WorkOrdersModule {}
