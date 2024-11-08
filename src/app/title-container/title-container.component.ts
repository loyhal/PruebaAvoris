import { Component } from '@angular/core';

@Component({
  selector: 'app-title-container',
  standalone: true,
  imports: [],
  templateUrl: './title-container.component.html',
  styleUrl: './title-container.component.css'
})
export class TitleContainerComponent {
  toggleFilters(): void {
    const filtersContainer = document.querySelector('.filters-container') as HTMLElement;
    if (filtersContainer) {
      filtersContainer.classList.toggle('hidden');
    } else {
      console.error("No se encontró el elemento .filters-container");
    }
  }

}
