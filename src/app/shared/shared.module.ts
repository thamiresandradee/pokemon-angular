import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { RouterModule } from '@angular/router';
import { PokeTypesComponent } from './poke-types/poke-types.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeTypesComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeTypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
