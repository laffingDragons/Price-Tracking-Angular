import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatExpansionModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatProgressBarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SigninComponent } from "./user/signin/signin.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { AppService } from './app.service';
import { HistoricalComponent } from './historical/historical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SigninComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'details', component: HistoricalComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: HomeComponent }
    ]),
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
