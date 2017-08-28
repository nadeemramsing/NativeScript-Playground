import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'; //Upgraded version of Http

@Injectable()
export class DataServiceService {
  private data: Observable<any>; 
  private dataClient;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.data = http.get("https://jsonplaceholder.typicode.com/posts");
    this.dataClient = httpClient.get("https://jsonplaceholder.typicode.com/posts", {observe: 'response'}); //now displays everything, not body only

    this.data.subscribe(response => this.data = JSON.parse(response._body)); //returns response with headers, ok, status, statusText, url, _body
    this.dataClient.subscribe(body => this.dataClient = body); //returns value directly
  }

  public getData() {
    return this.data;
  }
  public getDataClient() {
    return this.dataClient;
  }

}
