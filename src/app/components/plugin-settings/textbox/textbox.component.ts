import {Component, Input} from '@angular/core';
import {TextboxValue} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {
  @Input() item!: TextboxValue;

}
