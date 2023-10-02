import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  // Variáveis de paginação
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  public totalPages: number = 0;
  public displayedPokemons: any[] = [];

  // Variáveis de filtro
  public searchValue: string = '';

  constructor(
    private pokeApiService: PokeApiService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const type = this.activedRoute.snapshot.params['type'];
    this.pokeApiService.apiListAllPokemon.subscribe(
      res => {
        this.setAllPokemons = res.results
        //this.getAllPokemons = this.setAllPokemons;

        this.calculateTotalPages();
        this.updateDisplayedPokemons();
      },
      error => {
        this.apiError = true;
      }
    );
  }

  private calculateTotalPages() {
    this.totalPages = Math.ceil(this.setAllPokemons.length / this.itemsPerPage);
  }

  private updateDisplayedPokemons() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    // Aplica o filtro à lista completa antes da paginação
    const filteredPokemons = this.setAllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    this.displayedPokemons = filteredPokemons.slice(startIndex, endIndex);
  }

  public getSearch(value: string) {
    this.searchValue = value;
    this.currentPage = 1; // Reinicia para a primeira página
    this.updateDisplayedPokemons();
  }

  public onPageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updateDisplayedPokemons();
    }
  }
}
