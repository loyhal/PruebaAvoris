import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface Card {
  image: string;
  region: string;
  aventura: string;
  price: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  filters: any = {}; // Define los filtros según lo que necesites

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCards();
  }
  /*Carga de tarjetas y filtro a la vez*/
  loadCards(filters: any = {}): void {
    this.getCards()
      .pipe(
        tap(data => {
          this.cards = data.filter(card => {
            let matches = true;

            // Filtros de regiones
            if (filters.region && filters.region.length > 0) {
              matches = matches && filters.region.includes(card.region);
            }

            // Filtros de aventura
            if (filters.aventura && filters.aventura.length > 0) {
              matches = matches && filters.aventura.includes(card.aventura);
            }

            // Filtros de precio
            const cardPrice = parseFloat(card.price.replace('€', '').replace(',', '.').trim());
            if (filters.minPrice) {
              matches = matches && cardPrice >= filters.minPrice;
            }
            if (filters.maxPrice) {
              matches = matches && cardPrice <= filters.maxPrice;
            }

            return matches;
          });
        })
      )
      .subscribe();
  }

  getCards(): Observable<Card[]> {
    // Ruta relativa al archivo JSON
    return this.http.get<Card[]>('/data.json');
  }

}
