import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2/'
  constructor(public http:HttpClient) { }


  getPokemon(limit){
    return this.http.get(this.baseUrl+'pokemon?offset=0&limit='+limit)
  }

  searchPokemon(search){
    return this.http.get(this.baseUrl+'pokemon/'+search+'?offset=0&limit='+10)
  }

}
