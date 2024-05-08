import {Component} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {BHQPlugin} from "../../../bhqplugin";
import {PluginCollapseComponent} from "../plugin-collapse/plugin-collapse.component";

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

  constructor(public dataservice: PluginDataService) {
    this.pluginList = dataservice.pluginList
  }

}
