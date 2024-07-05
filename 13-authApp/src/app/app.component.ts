import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/enum/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authApp';

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>( () => {
    console.log(this.authService.authStatus() )
    if(this.authService.authStatus() === AuthStatus.checking) {
      return false
    };

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    console.log(this.authService.authStatus());
    switch(this.authService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        const url = localStorage.getItem('url');

        if(!url) this.router.navigateByUrl('/dashboard');

        this.router.navigateByUrl(url!);

        break;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('auth/login');
        break;
    }
  });
}
