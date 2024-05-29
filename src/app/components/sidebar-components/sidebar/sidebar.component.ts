import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardComponent} from "../../landing-page/card/card.component";
import {PluginListComponent} from "../plugin-list/plugin-list.component";
import {ServerListComponent} from "../server-list/server-list.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CardComponent,
    PluginListComponent,
    ServerListComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() loggedIn!: boolean
  @Output() sidebarCloseEvent = new EventEmitter<void>()
  @Output() loginEvent = new EventEmitter<boolean>()

  closeSidebar() {
    this.sidebarCloseEvent.emit()
  }

  logIn() {
    this.loginEvent.emit(true)
  }

  scrolling() {
    let element = document.getElementById('lists')
    // @ts-ignore
    if (element.scrollTop > 5) {
      // @ts-ignore
      document.getElementById('shadowTop').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('shadowTop').style.opacity = 0
    }

    // @ts-ignore
    if ((element.scrollHeight - element.scrollTop - element.clientHeight) > 5) {
      // @ts-ignore
      document.getElementById('shadowBottom').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('shadowBottom').style.opacity = 0
    }
  }
}
