import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTableComponent } from './pages/form/form-table/form-table.component';
import { FormCreateComponent } from './pages/form/form-create/form-create.component';

const routes: Routes = [{

  path: 'my-companies',
  component: FormTableComponent
},
{
  path: 'create-company',
  component: FormCreateComponent
},
{
  path: '',
  component: FormTableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
