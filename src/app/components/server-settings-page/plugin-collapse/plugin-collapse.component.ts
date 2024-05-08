import {Component, Input} from '@angular/core';
import {BHQPlugin} from "../../../bhqplugin";
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plugin-collapse',
  standalone: true,
  imports: [],
  templateUrl: './plugin-collapse.component.html',
  styleUrl: './plugin-collapse.component.css'
})
export class PluginCollapseComponent {
  @Input() bhqplugin!: BHQPlugin;
  @Input() zIndex!: number;
  collapsed = true;

  constructor(public dataservice: PluginDataService, private router: Router) {
  }

  nameConcat(): string {
    return this.bhqplugin.name.replace(/\s/g, "");
  }

  pluginSettings() {
    this.dataservice.selectPlugin(this.bhqplugin)
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
