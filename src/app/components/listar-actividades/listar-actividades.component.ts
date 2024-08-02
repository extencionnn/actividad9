import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Actividad } from '../../modelos/actividad';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-listar-actividades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-actividades.component.html',
  styleUrl: './listar-actividades.component.css'
})
export class ListarActividadesComponent {
  actividades !:Actividad[]
  nombreUsuario:any;
  idUsuario:any;

  constructor(private servicio:UsuariosService, private route:ActivatedRoute){}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
      this.nombreUsuario = params['nombreUsuario'];
      
      this.servicio.listarTareas(this.idUsuario).subscribe({
        next: data => this.actividades = data
      });

    });

  }
} 
