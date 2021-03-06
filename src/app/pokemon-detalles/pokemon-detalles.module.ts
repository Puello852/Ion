import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetallesPageRoutingModule } from './pokemon-detalles-routing.module';

import { PokemonDetallesPage } from './pokemon-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetallesPageRoutingModule
  ],
  declarations: [PokemonDetallesPage]
})
export class PokemonDetallesPageModule {}
