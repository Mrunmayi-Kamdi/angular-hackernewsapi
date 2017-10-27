import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 

@Injectable()
export class HackernewApiService {

  baseURL: string;

  constructor(private http: Http) {
    this.baseURL = 'https://node-hnapi.herokuapp.com';
   }

   fetchStories(storyType: string, page: number): Observable<any>{
     return this.http.get( `${this.baseURL}/${storyType}?page=${page}`)
                     .map(response => response.json());
   }

   fetchItem(id: number): Observable<any>{
     return this.http.get(`${this.baseURL}/item/${id}.json`)
                     .map(response => response.json());
   }
}
