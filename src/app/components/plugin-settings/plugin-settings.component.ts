import {Component} from '@angular/core';
import {PluginDataService} from "../../services/plugin-data/plugin-data.service";
import {BHQPlugin} from "../../bhqplugin";

@Component({
  selector: 'app-plugin-settings',
  standalone: true,
  imports: [],
  templateUrl: './plugin-settings.component.html',
  styleUrl: './plugin-settings.component.css'
})
export class PluginSettingsComponent {
  plugin?: BHQPlugin

  constructor(public dataservice: PluginDataService) {
  }

  ngOnInit() {
    this.plugin = this.dataservice.selectedPlugin
  }
}
