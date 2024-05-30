import {Component, Input} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {Router} from "@angular/router";
import {PluginData} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() plugin!: PluginData;

  constructor(private router: Router, public dataservice: PluginDataService) {
  }

  pluginSettings() {
    this.dataservice.selectPlugin(this.plugin.pluginId)
    this.router.navigateByUrl('/plugin-settings')
  }
}
