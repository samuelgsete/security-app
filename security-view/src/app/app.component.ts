import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public user = '';
  public admin = '';

  public constructor(
                        private readonly serviceKeycloak: KeycloakService, 
                        private readonly serviceUser: UserService,
                        private readonly serviceAdmin: AdminService
                    ) 
  {
    this.invocarApiUser();
    this.invocarApiAdmin();
  }

  public fazerLogout() {
    this.serviceKeycloak.logout();
  }

  public invocarApiUser() {
    this.serviceUser.getUser().subscribe(res => {
      this.user = res;
    }, err => {
      console.log(err);
    });
  }

  public invocarApiAdmin() {
    this.serviceAdmin.getAdmin().subscribe(res => {
      this.admin = res;
    }, err => {
      console.log(err);
    });
  }
}