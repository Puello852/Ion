import { Component, OnInit, ViewChild } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  pokemones:any = []
  viewInfinityScroll:boolean = true
  limite:number = 20
  constructor(public apiPokemon:PokeapiService) { 
    this.obtenerPokemon()
  }

  ngOnInit() {
  }

  busqueda(e){
    if(e == ''){
      this.limite = 20
      this.obtenerPokemon()
      return
    }
    this.apiPokemon.searchPokemon(e).subscribe((res:any)=>{
    this.pokemones = [{name:res.name,id:res.id,img:res.sprites.front_default}]
    },erro=>{
      this.pokemones = []
    })
  }

  loadData(event) {
    if(this.pokemones.length >= 100){
      this.viewInfinityScroll = false
      event.target.complete();
      event.target.disabled
    }else{
      this.limite = this.limite + 20
        this.obtenerPokemon(event)
      }
  }

  obtenerPokemon(evento?){
    this.apiPokemon.getPokemon(this.limite).subscribe((data:any)=>{
      if(evento) evento.target.complete();
      this.pokemones = [...data.results]      
      let pos = 1
      this.pokemones.forEach(element => {
        element.id = pos
        element.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pos+'.png'
        pos++
      });
      console.log(this.pokemones);
    })
  }

}
