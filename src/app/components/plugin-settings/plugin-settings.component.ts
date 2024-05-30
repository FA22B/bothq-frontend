import {Component} from '@angular/core';
import {PluginDataService} from "../../services/plugin-data/plugin-data.service";
import {PluginData} from "../../models/plugin-data.model";
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {Observable} from "rxjs";
import {SliderComponent} from "./slider/slider.component";
import {GroupComponent} from "./group/group.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ServerDataService} from "../../services/server-data/server-data.service";

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

  constructor(public pluginDataService: PluginDataService, private serverDataService: ServerDataService) {
    this.pluginData$ = this.pluginDataService.getSelectedPluginData(this.serverDataService.getSelectedServerId());
  }
}

