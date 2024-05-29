import {Component} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {BHQPlugin} from "../../../bhqplugin";
import {PluginCollapseComponent} from "../plugin-collapse/plugin-collapse.component";
import {ServerDataService} from "../../../services/server-data/server-data.service";

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
  pluginList?: BHQPlugin[]
  server?: string

  constructor(public dataservice: PluginDataService, private serverDataService: ServerDataService) {
    this.pluginList = dataservice.pluginList

    this.server = serverDataService.selectedServer || 'No server selected'
  }

}
