import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BdUsuarioService } from '../service/bd-usuario.service';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

/**
 * teste
 */
public teste() {
  const valor = window.localStorage.getItem('usuario');
  console.log(valor);
  console.log(typeof(valor));
}


}
