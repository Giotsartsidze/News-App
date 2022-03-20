import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  //newsapiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cba2dd43e4244518accc6c146259d397";

  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cba2dd43e4244518accc6c146259d397";

  sportsNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=cba2dd43e4244518accc6c146259d397";
  
  //topHeading
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techNewsApiUrl);
  }

  sportsNews():Observable<any>{
    return this._http.get(this.sportsNewsApiUrl);
  }
}
