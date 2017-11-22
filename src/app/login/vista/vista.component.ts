import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  user: User = {
    username: 'irvinstone ',
    password: 'leon'
  };

  constructor() {
  }

  ngOnInit() {
  }
  login(user) {
    console.log(user);
    console.log(this.user);
  }

}

class User {
  public username;
  public password;
}
