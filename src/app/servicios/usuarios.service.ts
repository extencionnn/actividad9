import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuarios';
import { Album } from '../modelos/album';
import { Actividad } from '../modelos/actividad';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  url : string ="https://jsonplaceholder.typicode.com/users"

  listarUsuarios(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(this.url);
  }

  albunesUsuarios(usuarioId:any):Observable<Album[]>
  {
    const url = `${this.url}/${usuarioId}/albums`;
    return this.http.get<Album[]>(url);
  
  }

  listarTareas(usuarioId:any):Observable<Actividad[]>
  {
    const url = `${this.url}/${usuarioId}/todos`;
    return this.http.get<Actividad[]>(url);
  
  }

}
