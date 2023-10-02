import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeTypesComponent } from './poke-types/poke-types.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeTypesComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeTypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
