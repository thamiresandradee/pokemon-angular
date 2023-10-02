import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing-module';

import { SharedModule } from '../shared/shared.module';
//Pages
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonsComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
