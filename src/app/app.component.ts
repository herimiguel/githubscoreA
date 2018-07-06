import { Component } from '@angular/core';
import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  score: ""
  userName=""
  userExists = false;
  promise;

  constructor(private _gitHubService: GitHubService){}


  onSubmit(){
    if(this.userName){
      this.userExists = true;
    }

  this._gitHubService.getScore(this.userName)
    .then(data => {
      console.log(data);
      this.score = data.followers + data.public_repos;
    })
    .catch(err => console.log(err));
}
}
