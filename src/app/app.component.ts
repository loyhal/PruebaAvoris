import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LateralMenuComponent } from "./lateral-menu/lateral-menu.component";
import { CarouselComponent } from "./header/carousel/carousel.component";
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";
import { TitleContainerComponent } from "./title-container/title-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LateralMenuComponent, CarouselComponent, CardsComponent, FooterComponent, TitleContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testA';

  @ViewChild(CardsComponent) cardsComponent!: CardsComponent;

  applyFilters(filters: any): void {
    this.cardsComponent.loadCards(filters);
  }
}
