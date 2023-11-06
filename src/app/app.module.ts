import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModalComponent } from './components/card-modal/card-modal.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharTableComponent } from './components/char-table/char-table.component';
import { SpacecraftInfoComponent } from './components/spacecraft-info/spacecraft-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    CardModalComponent,
    FooterComponent,
    CharTableComponent,
    SpacecraftInfoComponent,
    routingComponents
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
