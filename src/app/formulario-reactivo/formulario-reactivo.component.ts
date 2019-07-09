import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  loginForm: FormGroup;   //clase explicacion
  usuario: String   //clase explicacion
  password: String    //clase explicacion 
  mensaje: String     //clase explicacion
  mensajeUsuario: String
  mensajePassword: String

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearLoginForm()     //clase explicacion
  }

  /* clase explicacion */
  crearLoginForm() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    })
  }

  get prueba() { return this.loginForm.get('usuario'); }  //prueba

  validaLoginForm(){
    if(this.loginForm.valid){
      this.usuario = this.loginForm.controls['usuario'].value
      this.password = this.loginForm.controls['password'].value
      this.mensaje = ''
    }else{
      this.usuario = ''
      this.password = ''
      this.mensajeUsuario = JSON.stringify(this.loginForm.errors)
      // alert( JSON.stringify(this.loginForm.controls['usuario'].errors))
      // alert( JSON.stringify(this.loginForm.controls['password'].errors))
      if(this.loginForm.controls['usuario'].errors){
        this.mensajeUsuario = `Usuario Requerido`
      }else{
        this.mensajeUsuario = ''
      }
      
      this.mensajePassword = JSON.stringify(this.loginForm.errors)
    }
    if(this.loginForm.controls['password'].errors){
      this.mensajePassword = `Contraseña Incorrecta - Minimo de 6 digitos`
    }else{
      this.mensajePassword = ''
    }
  }
  /* clase explicacion*/

}