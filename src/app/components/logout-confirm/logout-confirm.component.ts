import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-logout-confirm',
  standalone: true,
  imports: [],
  templateUrl: './logout-confirm.component.html',
  styleUrl: './logout-confirm.component.css'
})
export class LogoutConfirmComponent {
  @Output() loginEvent = new EventEmitter<boolean>();

  logOut() {
    this.loginEvent.emit(false)
  }
}
