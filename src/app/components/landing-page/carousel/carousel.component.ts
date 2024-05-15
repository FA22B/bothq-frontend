import {Component} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {BHQPlugin} from "../../../bhqplugin";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";

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
  pluginList?: BHQPlugin[]

  constructor(public dataservice: PluginDataService) {
    this.pluginList = dataservice.pluginList
  }
}
