import {Component, Input} from '@angular/core';
import {SelectValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() item!: SelectValue;

}
