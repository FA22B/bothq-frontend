import {Component} from '@angular/core';
import {PluginDataService} from "../../services/plugin-data/plugin-data.service";
import {PluginData} from "../../models/plugin-data.model";
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {Observable} from "rxjs";
import {SliderComponent} from "./slider/slider.component";
import {GroupComponent} from "./group/group.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";

@Component({
  selector: 'app-plugin-settings',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf,
    NgForOf,
    NgSwitchCase,
    AsyncPipe,
    SliderComponent,
    GroupComponent,
    CheckboxComponent
  ],
  templateUrl: './plugin-settings.component.html',
  styleUrl: './plugin-settings.component.css'
})
export class PluginSettingsComponent {
  pluginData$: Observable<PluginData> | undefined;

  //plugin?: BHQPlugin
  protected readonly SliderComponent = SliderComponent;

  constructor(public pluginDataService: PluginDataService) {
  }

  ngOnInit(): void {
    //placeholder
    this.pluginData$ = this.pluginDataService.getSelectedPluginData(1);
  }
}

