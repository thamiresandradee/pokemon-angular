import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public typeDetails: any;
  public pokemonList: any[] = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.activedRoute.params.subscribe(params => {
      const type = params['type'];

      this.pokeApiService.getPokemonByType(type).subscribe((response: any) => {
        this.typeDetails = response;
        this.pokemonList = response.pokemon;
      });
    });
  }
}
