import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { result } from '../components/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'http://192.168.0.15:5002/api/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http
      .get<{ result: result[] }>(environment.baseUrl)
      .pipe(map((data) => data.result));
  }

  getOnePokemon(id: string): Observable<result> {
    return this.http
      .get<{ result: result }>(`${environment.baseUrl}/${id}`)
      .pipe(map((data) => data.result));
  }
}
