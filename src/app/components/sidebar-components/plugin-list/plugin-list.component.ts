import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ServerPluginDataService} from "../../../services/server-plugin-data/server-plugin-data.service";
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
  public pluginList?: PluginData[];
  loggedIn: boolean = false

  constructor(private router: Router,
              public dataService: ServerPluginDataService,
              public authService: AuthService) {
    dataService.pluginList$.subscribe(
      plugins => this.pluginList = plugins
    )

    authService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn)
  }


  pluginSettings(pluginId: number) {
    if (!this.loggedIn) {
      window.location.href = this.authService.getLoginAddress()
      return
    }

    this.dataService.selectPlugin(pluginId)

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
