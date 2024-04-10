import {Component, Input} from '@angular/core';
import {BHQPlugin} from "../../bhqplugin";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() bhqplugin!: BHQPlugin;
}
