import {Component} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {PluginCollapseComponent} from "../plugin-collapse/plugin-collapse.component";
import {PluginData} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-server-settings',
  standalone: true,
  imports: [
    PluginCollapseComponent
  ],
  templateUrl: './server-settings.component.html',
  styleUrl: './server-settings.component.css'
})
export class ServerSettingsComponent {
  pluginList?: PluginData[]

  constructor(public dataservice: PluginDataService) {
    this.pluginList = this.dataservice.getPluginList()
  }

}
