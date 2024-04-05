import {Component} from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
