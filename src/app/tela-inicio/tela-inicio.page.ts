import { Component } from '@angular/core';
import { BdUsuarioService } from '../service/bd-usuario.service';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.page.html',
  styleUrls: ['./tela-inicio.page.scss'],
})
export class TelaInicioPage {

  public usuario = new Usuario();


  constructor(private banco: BdUsuarioService) {

    this.usuario = banco.getUsuarioAtivo();

   }



}
