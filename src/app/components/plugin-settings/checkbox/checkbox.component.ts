import {Component, Input} from '@angular/core';
import {CheckboxValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() item!: CheckboxValue;

}
