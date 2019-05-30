import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { BusinessService } from './service/business.service';
import { LoginServiceService } from './login-service.service';

import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Sistema Livro';

  constructor(private authService : LoginServiceService, private _loadingBar: SlimLoadingBarService, private _router: Router,private bs: BusinessService) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private showNavBar : boolean = false;

  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if(mode !== null ){
          this.showNavBar = mode;
        }
      }
    )
  }

  isAuth(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout();
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
