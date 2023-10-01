import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.scss']
})
export class PokeTypesComponent implements OnInit {

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllTypes.subscribe(
      res => res
    );
  }
}
