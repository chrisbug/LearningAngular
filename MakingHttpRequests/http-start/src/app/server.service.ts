import { Injectable } from '@angular/core';
import { Headers,Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.put('https://ng-http-b25a8.firebaseio.com/data.json',
      servers,
      {headers});
  }

  getServers(){
    return this.http.get('https://ng-http-b25a8.firebaseio.com/data.json').map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('something went wrong');
      }
    );
  }

  getAppName(){
    return this.http.get('https://ng-http-b25a8.firebaseio.com/appName.json').map(
      (response: Response) => {
        return response.json();
      }
    )
  }
}
