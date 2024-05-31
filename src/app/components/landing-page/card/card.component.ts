import {Component, Input} from '@angular/core';
import {ServerPluginDataService} from "../../../services/server-plugin-data/server-plugin-data.service";
import {Router, RouterOutlet} from "@angular/router";
import {PluginData} from "../../../models/plugin-data.model";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() plugin!: PluginData;
  loggedIn: boolean = false

  constructor(private router: Router, public dataService: ServerPluginDataService, public authService: AuthService) {
    authService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn)
  }

  pluginSettings() {
    this.dataService.selectPlugin(this.plugin.pluginId)
    this.router.navigateByUrl('/plugin-settings')
  }

  logIn() {
    window.location.href = this.authService.getLoginAddress()
  }
}
