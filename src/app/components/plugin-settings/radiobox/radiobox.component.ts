import {Component, Input} from '@angular/core';
import {RadioboxValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-radiobox',
  standalone: true,
  imports: [],
  templateUrl: './radiobox.component.html',
  styleUrl: './radiobox.component.css'
})
export class RadioboxComponent {
  @Input() item!: RadioboxValue;

}
