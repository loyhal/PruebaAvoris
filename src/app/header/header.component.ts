import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu(): void {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    navLinks.classList.toggle('active');
  }
}
