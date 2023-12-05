import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OpcionesEmpleoComponent } from './opciones-empleo/opciones-empleo.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: '', component:LoginComponent, pathMatch: "full"},
    {path: 'register', component:RegisterComponent, pathMatch: "full"},
    {path: 'dashboard', component:DashboardComponent, pathMatch: "full"},
    {path: 'perfil', component:PerfilComponent, pathMatch: "full"},
    {path: 'opcionEmpleo', component:OpcionesEmpleoComponent, pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
