import { Component, EventEmitter, Output } from '@angular/core';
import { faAngleRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-lateral-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  @Output() filtersApplied = new EventEmitter<any>();

  getActiveFilters(): any {
    const filters: any = {
      region: [],
      aventura: [],
      minPrice: null,
      maxPrice: null
    };

    // Recopilar regiones seleccionadas y añadirlo a filters
    const regionCheckboxes = document.querySelectorAll('.filter-options#region input[type="checkbox"]');
    regionCheckboxes.forEach((checkbox: any) => {
    if (checkbox.checked) {
      filters.region.push(checkbox.id);
    }
  });

  // Corregir el selector de aventuras
  const aventuraCheckboxes = document.querySelectorAll('.filter-options#aventura input[type="checkbox"]');
  aventuraCheckboxes.forEach((checkbox: any) => {
    if (checkbox.checked) {
      filters.aventura.push(checkbox.id);
    }
  });

  // Recopilar precios mínimos y máximos
  const minPriceInput = document.querySelector('.price-input input[placeholder="Mínimo"]') as HTMLInputElement;
  const maxPriceInput = document.querySelector('.price-input input[placeholder="Máximo"]') as HTMLInputElement;
  filters.minPrice = minPriceInput?.value ? parseFloat(minPriceInput.value) : null;
  filters.maxPrice = maxPriceInput?.value ? parseFloat(maxPriceInput.value) : null;
  
  return filters;
  }
  
  faAngleRight = faAngleRight;
  faTag = faTag;

  toggleFilter(event: MouseEvent): void {
    const header = event.currentTarget as HTMLElement;
    const options = header.nextElementSibling as HTMLElement;
    const icon = header.querySelector('.fa-angle-right') as HTMLElement;

    if (options.style.display === "flex") {
      options.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    } else {
      options.style.display = "flex";
      icon.style.transform = "rotate(90deg)";
    }
  }

  findCards(): void {
    const activeFilters = this.getActiveFilters();
    this.filtersApplied.emit(activeFilters);
  }
 
}
