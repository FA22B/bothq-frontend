import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BotHQ';
  theme = 'dark'
  loggedIn = false;
  protected readonly AuthService = AuthService;

  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.loggedIn
    this.theme = this.getPreferredTheme();
  }

  receiveTheme($event: string) {
    this.themeToggle($event)
  }

  themeToggle(option: string) {
    if (option === 'auto') {
      this.theme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      this.setStoredTheme(option)
    } else {
      this.theme = option
      this.setStoredTheme(this.theme)
    }
  }

  setStoredTheme(theme: string) {
    localStorage.setItem('theme', theme)
  }

  getStoredTheme() {
    return localStorage.getItem('theme')
  }

  getPreferredTheme() {
    let storedTheme = this.getStoredTheme()
    if (storedTheme && storedTheme != 'auto') {
      return storedTheme;
    }
    return (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }

  toggleLogin($event: boolean) {
    if (this.authService.loggedIn) {
      this.authService.loggedIn = false
    } else {
      this.redirectDiscord()
    }
    this.loggedIn = this.authService.loggedIn
  }

  redirectDiscord() {
    window.location.href = this.authService.getLoginAddress()
  }

  openSidebar() {
    // @ts-ignore
    document.getElementById("mySidebar").style.width = "350px";
    // @ts-ignore
    document.getElementById("main").style.marginLeft = "350px";
  }

  closeSidebar() {
    // @ts-ignore
    document.getElementById("mySidebar").style.width = "0";
    // @ts-ignore
    document.getElementById("main").style.marginLeft = "0";
  }
}
