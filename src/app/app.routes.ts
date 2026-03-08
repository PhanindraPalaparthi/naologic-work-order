import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/work-orders/work-orders.module').then(
        (m) => m.WorkOrdersModule
      ),
  },
];
