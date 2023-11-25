import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from './app.tokens';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'multi-tenant-application-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  hostname = window.location.hostname === 'localhost'
    ? (<any>window).overrideHostname || window.location.hostname
    : window.location.hostname;

  constructor(private profileService: ProfileService) {
    console.log(this.profileService.profile);
  }
}
