import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.scss']
})
export class PokeTypesComponent implements OnInit {

  public getAllTypesPokemon: any;

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllTypes.subscribe(
      res => {
        this.getAllTypesPokemon = res.results;
      }
    );
  }

}
