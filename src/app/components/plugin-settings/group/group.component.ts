import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgSwitchCase} from "@angular/common";
import {GroupValue} from "../../../models/plugin-data.model";
import {SliderComponent} from "../slider/slider.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {SelectComponent} from "../select/select.component";

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgSwitchCase,
    SliderComponent,
    CheckboxComponent,
    SelectComponent
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {
  @Input() item!: GroupValue;
  @Input() frame!: String;
  @Input() header: boolean = true;
}
