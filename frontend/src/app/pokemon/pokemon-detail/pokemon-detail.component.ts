import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pokemon } from 'src/app/common/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;
  pokemonImgUrl: string;

  constructor(
    public dialogRef: MatDialogRef<PokemonDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public p:Pokemon
  ) { 
    this.pokemon = p; 
    this.pokemonImgUrl = "./../../assets/images/pokemon/" + this.pokemon.id + ".png"
  }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}
