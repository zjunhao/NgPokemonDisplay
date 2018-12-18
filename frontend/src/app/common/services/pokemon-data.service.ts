import { Injectable } from '@angular/core';
import { Pokemon } from './../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private pokemonUrl: string = 'https://localhost:5001/datasrc/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons (): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl)
    .pipe(
      tap(_ => console.log("feteched pokemons"))
    )
  }

}
