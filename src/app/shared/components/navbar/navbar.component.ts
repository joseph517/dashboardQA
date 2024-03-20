import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  @Input() username!: string;

  logout(): void{

    this.authService.logout()
    .subscribe((res) => {
      console.log('res', res);
      localStorage.clear();
      this.router.navigate(['/auth/login']);

    })

  }

 

}
