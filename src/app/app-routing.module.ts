import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeTypesComponent } from './shared/poke-types/poke-types.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  //{
  //  path: '',
  //  loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  //},
  { path: '', component: PokeTypesComponent },
  { path: 'pokemon-type/:type', component: PokemonsComponent },
  { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
