import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemonDetails: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      const name = this.activedRoute.snapshot.params['name'];

      this.pokeApiService.getPokemonByName(name).subscribe((response: any) => {
        this.pokemonDetails = response;
      });
    });
  }
}
