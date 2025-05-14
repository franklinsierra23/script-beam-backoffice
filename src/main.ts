import { BlankLayoutComponent } from './app/layouts/blank-layout/blank-layout.component';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './app/layouts/auth-layout/auth-layout.component';

import { LoginPageComponent } from './app/pages/Auth/login-page/login-page.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,appConfig )
  .catch((err) => console.error(err));
