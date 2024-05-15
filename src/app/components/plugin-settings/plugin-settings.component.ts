import {Component} from '@angular/core';
import {PluginDataService} from "../../services/plugin-data/plugin-data.service";
import {PluginData} from "../../models/plugin-data.model";
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-plugin-settings',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf,
    NgForOf,
    NgSwitchCase,
    AsyncPipe
  ],
  templateUrl: './plugin-settings.component.html',
  styleUrl: './plugin-settings.component.css'
})
export class PluginSettingsComponent {
  pluginData$: Observable<PluginData> | undefined;

  //plugin?: BHQPlugin

  constructor(public pluginDataService: PluginDataService) {
  }

  ngOnInit(): void {
    //this.plugin = this.pluginDataService.selectedPlugin // Old Mockdata

    this.pluginData$ = this.pluginDataService.getPluginData();

    /*    this.pluginDataService.getPluginData().subscribe({
            next: (data: PluginData) => {
              this.pluginData = data;
              console.log(this.pluginData);
            },
            error: (error) => {
              console.error('Error fetching plugin data:', error);
            }
          }
        );*/
  }
}

