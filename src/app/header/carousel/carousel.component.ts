import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentIndex: number = 0;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  ngOnInit(): void {
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number): void {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ajustar el índice si se excede
    if (index >= totalSlides) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = totalSlides - 1;
    } else {
      this.currentIndex = index;
    }

    // Desplazamiento del contenedor
    const carouselImages = document.querySelector('.carousel-images') as HTMLElement;
    if (carouselImages) {
      carouselImages.style.transform = `translateX(${-this.currentIndex * 100}%)`;
    } else {
      console.error("No se encontró el elemento .carousel-images");
    }
  }

  nextSlide(): void {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide(): void {
    this.showSlide(this.currentIndex - 1);
  }
}
