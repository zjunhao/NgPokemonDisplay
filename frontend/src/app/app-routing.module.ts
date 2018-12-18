import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'settings', loadChildren: './setting/setting.module#SettingModule' },
  { path: '', loadChildren: './pokemon/pokemon.module#PokemonModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
