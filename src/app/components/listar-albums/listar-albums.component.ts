import { Component } from '@angular/core';
import { Album } from '../../modelos/album';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ActivatedRoute, Params, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-albums.component.html',
  styleUrl: './listar-albums.component.css'
})
export class ListarAlbumsComponent {

  albums! : Album[];
  nombreUsuario:any;
  idUsuario:any;

  constructor(private servicio:UsuariosService, private route:ActivatedRoute){}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
      this.nombreUsuario = params['nombreUsuario'];
      
      this.servicio.albunesUsuarios(this.idUsuario).subscribe({
        next: data => this.albums = data
      });

    });

  }
}
