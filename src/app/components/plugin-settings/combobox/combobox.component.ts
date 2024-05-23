import {Component, Input} from '@angular/core';
import {ComboboxValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-combobox',
  standalone: true,
  imports: [],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.css'
})
export class ComboboxComponent {
  @Input() item!: ComboboxValue;

}
