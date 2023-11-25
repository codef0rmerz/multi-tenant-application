import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { Observable } from 'rxjs';
import { Profile, ProfileService } from './app.tokens';

const initializeProfileFactory = (
  profileService: ProfileService
): (() => Observable<Profile>) => {
  return () => profileService.loadProfile()
};

const initializeProfile = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: initializeProfileFactory,
  deps: [ProfileService],
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(), ProfileService, initializeProfile],
};
