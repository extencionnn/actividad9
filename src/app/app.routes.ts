import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ListarAlbumsComponent } from './components/listar-albums/listar-albums.component';
import { ListarActividadesComponent } from './components/listar-actividades/listar-actividades.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'usuarios',
        pathMatch: 'full'
    },
    {
        path: 'usuarios',
        component: ListarUsuariosComponent
    },
    {
        path: 'albums/:idUsuario/:nombreUsuario',
        component: ListarAlbumsComponent
    },
    {
        path:'actividades/:idUsuario/:nombreUsuario',
        component: ListarActividadesComponent
    }
];
