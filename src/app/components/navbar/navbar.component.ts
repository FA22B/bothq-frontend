import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ServerDataService} from "../../services/server-data/server-data.service";
import {Observable} from "rxjs";
import {DiscordGuild} from "../../../types";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loggedIn: boolean = false
  @Input() appTheme!: string
  @Output() themeEvent = new EventEmitter<string>()
  @Output() loginEvent = new EventEmitter<boolean>()
  @Output() sidebarOpenEvent = new EventEmitter<void>()

  public selectedServer?: DiscordGuild

  constructor(private router: Router,
              public serverDataService: ServerDataService,
              authService: AuthService) {
    serverDataService.selectedServer$.subscribe((guild) => this.selectedServer = guild)
    authService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn)
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
