import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CarouselComponent} from "./components/landing-page/carousel/carousel.component";
import {SidebarComponent} from "./components/sidebar-components/sidebar/sidebar.component";
import {AuthService} from "./services/auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {LogoutConfirmComponent} from "./components/logout-confirm/logout-confirm.component";
import {ServerPluginDataService} from "./services/server-plugin-data/server-plugin-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, SidebarComponent, LogoutConfirmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BotHQ';
  theme = 'dark'

  loggedIn: boolean = false;

  constructor(private authService: AuthService,
              private httpClient: HttpClient,
              serverPluginDataService: ServerPluginDataService) {
    authService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn)
    serverPluginDataService.updatePlugins()

    this.theme = this.getPreferredTheme()
  }

  ngOnInit() {
    this.getSidebar()
  }

  /**
   * Change the theme of the website based on the user input via the navbar
   */
  receiveTheme($event: string) {
    this.themeToggle($event)
  }

  /**
   * Change the theme of the website based on the user input and store the theme
   */
  themeToggle(option: string) {
    if (option === 'auto') {
      this.theme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      this.setStoredTheme(option)
    } else {
      this.theme = option
      this.setStoredTheme(this.theme)
    }
  }

  /**
   * Store the theme in local storage
   */
  setStoredTheme(theme: string) {
    localStorage.setItem('theme', theme)
  }

  /**
   * Get the theme from local storage
   */
  getStoredTheme() {
    return localStorage.getItem('theme')
  }

  /**
   * Get the preferred theme based on the user's system settings
   */
  getPreferredTheme() {
    let storedTheme = this.getStoredTheme()
    if (storedTheme && storedTheme != 'auto') {
      return storedTheme;
    }
    return (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }

  /**
   * Toggle the login status of the user
   */
  toggleLogin($event: boolean) {
    if (this.loggedIn) {
      this.logoutDiscord()
    } else {
      this.redirectDiscord()
    }
  }

  /**
   * Redirect the user to the discord login page
   */
  redirectDiscord() {
    window.location.href = this.authService.getLoginAddress()
  }

  logoutDiscord() {
    this.httpClient.get(this.authService.getLogoutAddress()).subscribe(
      () => {
        this.authService.setLoggedIn(false)
      }
    )
  }

  getSidebar() {
    let sidebar = localStorage.getItem('sidebar')
    if (sidebar == 'open') {
      this.openSidebar()
    } else {
      this.closeSidebar()
    }
  }

  openSidebar() {
    let sideBar = document.getElementById("mySidebar")
    if (sideBar) sideBar.style.width = "350px";

    let main = document.getElementById("main")
    if (main) main.style.marginLeft = "350px";

    localStorage.setItem('sidebar', 'open')
  }

  closeSidebar() {
    let sideBar = document.getElementById("mySidebar")
    if (sideBar) sideBar.style.width = "0";

    let main = document.getElementById("main")
    if (main) main.style.marginLeft = "0";

    localStorage.setItem('sidebar', 'closed')
  }
}
