import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    const name = 'Johao'
    this.formGroup = this.formBuilder.group({
      name: [name.toUpperCase(), Validators.required],
      email: ['john@angular.io', [Validators.required, Validators.email]]
    });
  }

}
