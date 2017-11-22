import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestService} from '../rest.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  user = {
    username: null,
    password: null
  };

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }
  login(user) {
    this.restService.login(user);
  }

}
