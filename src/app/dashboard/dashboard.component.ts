import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public router: Router){}

  Perfil(){
    this.router.navigateByUrl('/perfil')
  }

  Opcion_Empleo(){
    this.router.navigateByUrl('/opcionEmpleo')
  }
}


