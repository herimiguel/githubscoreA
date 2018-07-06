import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const TOKEN = '32b00cbc8f2b591b5dd0d07031c7c44cf2350fc3';

@Injectable()
export class GitHubService {

  constructor(private _http: Http) { }
  // score= ""
  getScore(userName) {
   
    return this._http.get(`https://api.github.com/users/${ userName }?access_token=${TOKEN}`).map(data => data.json()).toPromise();  
  }

}