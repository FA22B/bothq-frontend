import {Component, Input} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
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

  constructor(private router: Router, public dataservice: PluginDataService, public authservice: AuthService) {
  }

  pluginSettings() {
    this.dataservice.selectPlugin(this.plugin.pluginId)
    this.router.navigateByUrl('/plugin-settings')
  }

  logIn() {
    window.location.href = this.authservice.getLoginAddress()
  }
}
