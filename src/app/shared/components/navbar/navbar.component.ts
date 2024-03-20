import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private router: Router) { }

  @Input() username!: string;

  logout(): void{
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

 

}
