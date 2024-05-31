import {Component} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {ServerPluginDataService} from "../../../services/server-plugin-data/server-plugin-data.service";
import {PluginData} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  pluginList?: PluginData[]

  constructor(public pluginDataService: ServerPluginDataService) {
    this.pluginDataService.pluginList$.subscribe(
      plugins => this.pluginList = plugins
    )
  }
}
