import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/';
  private urlTypes: string = 'https://pokeapi.co/api/v2/type/';

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllTypes(): Observable<any> {
    return this.http.get<any>(this.urlTypes).pipe(
      tap( res => res),
    )
  }

  public getTypes() {
    return this.http.get(`${this.apiUrl}type`);
  }

  public getPokemonByType(type: string) {
    return this.http.get(`${this.apiUrl}type/${type}`);
  }

  getPokemonDetails(pokemonName: string) {
    return this.http.get(`${this.apiUrl}pokemon/${pokemonName}`);
  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.apiUrl}pokemon/${name}`);
  }
}
