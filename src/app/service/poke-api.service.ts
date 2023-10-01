import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private urlType: string = 'https://pokeapi.co/api/v2/type/';

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllTypes():Observable<any> {
    return this.http.get<any>(this.urlType).pipe(
      tap( res => res),
      tap( res => {
        console.log(res)
      })
    )
  }
}
