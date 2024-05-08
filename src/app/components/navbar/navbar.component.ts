import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router: Router) {
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

  logOut() {
    this.loginEvent.emit(false)
  }

  openSidebar() {
    this.sidebarOpenEvent.emit()
  }
}
