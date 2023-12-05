import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(public router: Router){}
  
  Redireccion(){
    this.router.navigateByUrl('/register')
  }
  
   validarPassword(contraseña: string): boolean {
    // Puedes agregar lógica de validación del nombre aquí
    // Por ejemplo, asegurarte de que no esté vacío
      const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regexContraseña.test(contraseña);
  }
  
   validarCorreo(correo: string): boolean {
    // Puedes utilizar expresiones regulares u otras lógicas para validar el correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  email: string = '';
  password: string = '';

  login() {

    const correoInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;

    // Obtener los valores del localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    console.log("El Usuario Digitado Es: " + this.email);
    console.log("La Contraseña Digitada Es: " + this.password);
  
    console.log("El Usuario Guardado Es: " + storedEmail);
    console.log("La Contraseña Guardada Es: " + storedPassword);
  
    // Convertir valores del formulario a cadenas
    const enteredEmailString = JSON.stringify(this.email);
    const enteredPasswordString = JSON.stringify(this.password);
  
    // Esperar un breve período para asegurar que los datos se hayan almacenado correctamente
    setTimeout(() => {
      // Verificar si los valores coinciden con las credenciales ingresadas
      if (!this.validarCorreo(correoInput.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }else{
        if (!this.validarPassword(passwordInput.value)) {
          alert("Por Favor, Ingresa Una Contraseña Valida.");
          return;
        }else{
          if (enteredEmailString === storedEmail && enteredPasswordString === storedPassword) {
            console.log('Inicio de sesión exitoso');
            // Puedes redirigir a la página de inicio o a cualquier otra página después del inicio de sesión
            this.router.navigateByUrl('/dashboard');
          } else {
            console.log('Credenciales incorrectas');
            alert('Credenciales incorrectas');
          }
        }
      }
      
    }, 100);
  }
  
}


