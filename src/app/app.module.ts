import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { StaffComponent } from './pages/staff/staff.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { MatRippleModule } from '@angular/material/core';

const firebaseConfig = {
  apiKey: "AIzaSyAAtAleMHfq--PtoKRxCFlwuMlnYTvjsW0",
  authDomain: "nautilus-4207a.firebaseapp.com",
  databaseURL: "https://nautilus-4207a.firebaseio.com",
  projectId: "nautilus-4207a",
  storageBucket: "nautilus-4207a.appspot.com",
  messagingSenderId: "246723781840",
  appId: "1:246723781840:web:ab34f1fe30b5ed0ac0ead5",
  measurementId: "G-0Z6WW8B1L5"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopnavComponent,
    StaffComponent,
    EquipmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
