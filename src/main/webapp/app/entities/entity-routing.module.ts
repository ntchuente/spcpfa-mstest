import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        data: { pageTitle: 'spcpfatestApp.person.home.title' },
        loadChildren: () => import('./person/person.routes'),
      },
      {
        path: 'car',
        data: { pageTitle: 'spcpfatestApp.car.home.title' },
        loadChildren: () => import('./car/car.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
