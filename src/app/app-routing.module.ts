import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tela-inicio', loadChildren: './tela-inicio/tela-inicio.module#TelaInicioPageModule' },
  { path: 'separa-material', loadChildren: './separa-material/separa-material.module#SeparaMaterialPageModule' },
  { path: 'recebe-material', loadChildren: './recebe-material/recebe-material.module#RecebeMaterialPageModule' },
  { path: 'inventario', loadChildren: './inventario/inventario.module#InventarioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
