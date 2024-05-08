import {Component, Input} from '@angular/core';
import {BHQPlugin} from "../../../bhqplugin";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() bhqplugin!: BHQPlugin;

  constructor(private router: Router, public dataservice: PluginDataService) {
  }

  pluginSettings() {
    this.dataservice.selectPlugin(this.bhqplugin)
    this.router.navigateByUrl('/plugin-settings')
  }
}
