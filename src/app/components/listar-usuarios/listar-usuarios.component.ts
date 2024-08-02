import { Component } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuarios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {
  constructor(private servicio : UsuariosService){}
  usuarios!:Usuario[];
  
  ngOnInit()
  {
    this.servicio.listarUsuarios().subscribe({
      next: data => this.usuarios = data
      
    })
  }
}
