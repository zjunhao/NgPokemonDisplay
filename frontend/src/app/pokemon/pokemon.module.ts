import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from './../common/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [PokemonDetailComponent, PokemonListComponent],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MatDialogModule,
  ]
})
export class PokemonModule { }
