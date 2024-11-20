import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContratosComponent } from './components/listar-contratos/listar-contratos.component';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';

const routes: Routes = [
  { path: 'crear-contrato', component: CrearContratoComponent },
  { path: 'listar-contratos', component: ListarContratosComponent },
  { path: '', redirectTo: '/listar-contratos', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
