import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-detalles',
  templateUrl: './pokemon-detalles.page.html',
  styleUrls: ['./pokemon-detalles.page.scss'],
})
export class PokemonDetallesPage implements OnInit {
  details:any = [];
  sprites: any = '';

  constructor(public idruta:ActivatedRoute,private api:PokeapiService) { }

  ngOnInit() {
    let index = this.idruta.snapshot.paramMap.get('id')
    this.api.searchPokemon(index).subscribe((data:any)=>{
      console.log(data);

      this.details = data
      this.sprites = data.sprites.front_default

    })
  }

}
