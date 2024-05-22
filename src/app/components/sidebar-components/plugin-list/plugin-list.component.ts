import {Component} from '@angular/core';
import {BHQPlugin} from "../../../bhqplugin";
import {Router} from "@angular/router";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";

@Component({
  selector: 'app-plugin-list',
  standalone: true,
  imports: [],
  templateUrl: './plugin-list.component.html',
  styleUrl: './plugin-list.component.css'
})
export class PluginListComponent {
  pluginList?: BHQPlugin[]

  constructor(private router: Router, public dataservice: PluginDataService) {
    this.pluginList = dataservice.pluginList
  }

  getSelectedPlugin() {
    return this.dataservice.selectedPlugin
  }

  pluginSettings(plugin: BHQPlugin) {
    this.dataservice.selectPlugin(plugin)

    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigateByUrl('/plugin-settings');
    });
  }

  scrolling() {
    let element = document.getElementById('plugin-list-group')
    // @ts-ignore
    if (element.scrollTop > 5) {
      // @ts-ignore
      document.getElementById('shadowTop').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('shadowTop').style.opacity = 0
    }

    // @ts-ignore
    if ((element.scrollHeight - element.scrollTop - element.clientHeight) > 5) {
      // @ts-ignore
      document.getElementById('shadowBottom').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('shadowBottom').style.opacity = 0
    }
  }
}
