import { Component } from '@angular/core';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (protected service : JwtService){}
logout() {
this.service.logout();
}
}
