import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'; //Upgraded version of Http

@Injectable()
export class DataServiceService {
  private data: Observable<any>; 
  private dataClient;

  constructor(http: Http, httpClient: HttpClient) {
    this.data = http.get("https://jsonplaceholder.typicode.com/posts");
    this.dataClient = httpClient.get("https://jsonplaceholder.typicode.com/posts");

    this.data.subscribe(response => console.log(JSON.parse(response._body))); //returns response with headers, ok, status, statusText, url, _body
    this.dataClient.subscribe(body => console.log(body)); //returns value directly
  }

  public getData() {
    return this.data;
  }
  public getDataClient() {
    return this.dataClient;
  }

}
