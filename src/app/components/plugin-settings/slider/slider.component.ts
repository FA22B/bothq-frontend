import {Component, Input} from '@angular/core';
import {SliderValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() item!: SliderValue;


}
