import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(public router: Router){}
  
  Redireccion(){
    this.router.navigateByUrl('/')
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
  confirmPassword: string = '';
  storageGlobal: string = '';

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);

        const correoInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;
    if (!this.validarCorreo(correoInput.value)) {
      alert("Por favor, ingresa un correo electrónico válido, Debe tener un @");
      return;
    }else{
      if (!this.validarPassword(passwordInput.value)) {
        alert("Por Favor, Ingresa Una Contraseña Valida, Debe tener 1 Mayuscula, 1 Minuscula y Al Menos 8 Caracteres");
        return;
      }else{
        if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {

          console.log("--------------------")
          console.log("Registro En Proceso")
          console.log("--------------------")
      
          // Datos
          console.log("--------------------")
          console.log('Email: ' + this.email)
          console.log('Password: ' + this.password)
          console.log("--------------------")
      
          // Verificar si la contraseña y la confirmación son iguales
          if (this.password === this.confirmPassword) {
            console.log("--------------------")
            console.log("Registro Exitoso")
            console.log("--------------------")
      
            // Ingresar datos de la API
            let correo = JSON.stringify(this.email);
            let contrasena = JSON.stringify(this.confirmPassword);
      
            localStorage.setItem('email', correo);
            localStorage.setItem('password', contrasena);
      
            // Redirección
            console.log("Redireccionando al Login...")
            this.router.navigateByUrl('/');
          } else {
            console.log("Las contraseñas deben coincidir")
            alert("Las contraseñas deben coincidir")
          }
  
      } else {
  
        if (this.email == '' && this.password == '' && this.confirmPassword == ''){
          console.log("Campos totalmente vacios")
          alert("Campos totalmente vacios")
        } else {
          //Correo vacio
          if (this.email == '') {
            console.log("Por favor, ingresa un correo con @")
            alert("Por favor, ingresa un correo con @")
          }
          //Contraseña vacia
          if (this.password == '') {
            console.log("Por favor, ingresa una contraseña valida")
            alert("Por favor, ingresa una contraseña valida")
          } else{
            //Verificación vacio
            if (this.confirmPassword == '') {
              console.log(this.password)
              console.log("Por favor, ingresa la contraseña nuevamente")
              alert("Por favor, ingresa la contraseña nuevamente")
            } else {
              //Verificación no coincidida
              console.log("Error A La Hora De Registrar")
              alert("Error A La Hora De Registrar")
            }
          }
        }
      }
      }
    }
  }
}
