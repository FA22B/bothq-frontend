import {Component} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
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

  constructor(public dataservice: PluginDataService) {
    this.pluginList = this.dataservice.getPluginList()
  }
}
