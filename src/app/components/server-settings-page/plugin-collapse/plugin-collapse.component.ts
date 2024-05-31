import {Component, Input} from '@angular/core';
import {ServerPluginDataService} from "../../../services/server-plugin-data/server-plugin-data.service";
import {Router} from "@angular/router";
import {PluginData} from "../../../models/plugin-data.model";

@Component({
  selector: 'app-plugin-collapse',
  standalone: true,
  imports: [],
  templateUrl: './plugin-collapse.component.html',
  styleUrl: './plugin-collapse.component.css'
})
export class PluginCollapseComponent {
  @Input() plugin!: PluginData;
  @Input() zIndex!: number;
  collapsed = true;

  constructor(public dataservice: ServerPluginDataService, private router: Router) {
  }

  nameConcat(): string {
    return this.plugin.displayName.replace(/\s/g, "");
  }

  pluginSettings() {
    this.dataservice.selectPlugin(this.plugin.pluginId)
    this.router.navigateByUrl('/plugin-settings')
  }

  open() {
    this.collapsed = false;
    let doc = document.getElementById('overflow' + this.nameConcat());
    if (doc) doc.style.backdropFilter = 'blur(10px)';
  }

  collapse() {
    this.collapsed = true;
    let doc = document.getElementById('overflow' + this.nameConcat());
    if (doc) doc.style.backdropFilter = 'none';
  }
}
