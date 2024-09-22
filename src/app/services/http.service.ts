import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../Interfaces/Repos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  fetchData() {
    return this.http.get<Repos[]>(environment.publicApi)
  }

}
