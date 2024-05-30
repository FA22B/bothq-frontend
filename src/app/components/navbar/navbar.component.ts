import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ServerDataService} from "../../services/server-data/server-data.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() appTheme!: string
  @Input() loggedIn!: boolean
  @Output() themeEvent = new EventEmitter<string>()
  @Output() loginEvent = new EventEmitter<boolean>()
  @Output() sidebarOpenEvent = new EventEmitter<void>()

  constructor(private router: Router, public serverDataService: ServerDataService) {
  }

  goTo(route: string) {
    this.router.navigateByUrl('/' + route)
  }

  themeToggle(theme: string) {
    this.themeEvent.emit(theme)
  }

  logIn() {
    this.loginEvent.emit(true)
  }

  openSidebar() {
    this.sidebarOpenEvent.emit()
  }
}
