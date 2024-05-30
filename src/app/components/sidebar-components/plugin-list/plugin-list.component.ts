import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {PluginData} from "../../../models/plugin-data.model";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-plugin-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './plugin-list.component.html',
  styleUrl: './plugin-list.component.css'
})
export class PluginListComponent {
  pluginList: PluginData[]

  constructor(private router: Router, public dataservice: PluginDataService, public authservice: AuthService) {
    this.pluginList = this.dataservice.getPluginList() || []
  }

  getSelectedPlugin() {
    return this.dataservice.selectedPlugin
  }

  pluginSettings(pluginid: number) {
    if (!this.authservice.loggedIn) {
      window.location.href = this.authservice.getLoginAddress()
      return
    }

    this.dataservice.selectPlugin(pluginid)

    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigateByUrl('/plugin-settings');
    });
  }

  scrolling() {
    let element = document.getElementById('plugin-list-group')
    // @ts-ignore
    if (element.scrollTop > 5) {
      // @ts-ignore
      document.getElementById('pluginShadowTop').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('pluginShadowTop').style.opacity = 0
    }

    // @ts-ignore
    if ((element.scrollHeight - element.scrollTop - element.clientHeight) > 5) {
      // @ts-ignore
      document.getElementById('pluginShadowBottom').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('pluginShadowBottom').style.opacity = 0
    }
  }
}
