import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).then(() => {
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = `${window.location.hostname === 'localhost'
    ? (<any>window).overrideHostname || window.location.hostname
    : window.location.hostname}.css`;
  document.head.appendChild(style);
}).catch((err) =>
  console.error(err)
);
