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

  // Variáveis de paginação
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  public totalPages: number = 0;

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
      this.getPokemons();

      this.previousPage();
      this.nextPage();
  }

  getPokemons() {
    this.activedRoute.params.subscribe(params => {
      const type = this.activedRoute.snapshot.params['type'];

      this.pokeApiService.getPokemonByType(type).subscribe((response: any) => {
        this.typeDetails = response;
        this.totalPages = Math.ceil(response.pokemon.length / this.itemsPerPage);
        this.loadPokemonList();
      });
    });
  }

  loadPokemonList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pokemonList = this.typeDetails.pokemon.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPokemons();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getPokemons();
    }
  }
}
