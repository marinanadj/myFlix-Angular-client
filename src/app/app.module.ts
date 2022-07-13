import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
<<<<<<< .merge_file_a09728
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DirectorComponent } from './director/director.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GenreComponent } from './genre/genre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
=======
import { ProfileComponent } from './profile/profile.component';
import { GenreComponent } from './genre/genre.component';
import { DirectorComponent } from './director/director.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
>>>>>>> .merge_file_a09164

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
<<<<<<< .merge_file_a09728
  { path: 'profile', component: ProfileComponent }, 
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
=======
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
]
>>>>>>> .merge_file_a09164

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
<<<<<<< .merge_file_a09728
    DirectorComponent,
    EditProfileComponent,
    GenreComponent,
    NavbarComponent,
    ProfileComponent,
    SynopsisComponent
=======
    ProfileComponent,
    GenreComponent,
    DirectorComponent,
    SynopsisComponent,
    NavbarComponent,
    EditProfileComponent
>>>>>>> .merge_file_a09164
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
<<<<<<< .merge_file_a09728
    MatIconModule
=======
>>>>>>> .merge_file_a09164
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }