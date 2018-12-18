import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonDetailComponent } from './../pokemon-detail/pokemon-detail.component';
import { MatDialog } from '@angular/material';
import { PokemonDataService } from 'src/app/common/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  filterValue: string;

  constructor(public dialog: MatDialog, private pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.pokemonDataService.getPokemons().subscribe(
      pokemons => {
        this.pokemons= pokemons;
        this.filteredPokemons = this.pokemons;
      }
    )
  }

  openDialog(selectedPokemon): void {
    const dialogRef = this.dialog.open(PokemonDetailComponent, {
      width: '450px',
      data: selectedPokemon
    });

    dialogRef.afterClosed().subscribe( _ => {
      // console.log('Dialog Closed');
    })
  }

  onSearchItemChange(value: string): void {
    this.filterValue = value;
    this.filteredPokemons = this.filterValue ? this.performFilter(this.filterValue) : this.pokemons;
  }

  performFilter(filterBy: string): Pokemon[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.pokemons.filter((p: Pokemon) => p.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}