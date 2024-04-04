import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule
import { AppComponent } from './app.component';
import { DssefaButtonComponent } from './dssefa-button/dssefa-button.component';
import { DssefaAccordionComponent } from './dssefa-accordion/dssefa-accordion.component';
import { DssefaAlertComponent } from './dssefa-alert/dssefa-alert.component';
import { DssefaCardComponent } from './dssefa-card/dssefa-card.component';
import { CardItemComponent } from './dssefa-card/card-item/card-item.component';
import { DssefaInputComponent } from './dssefa-input/dssefa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DssefaButtonComponent,
    DssefaAccordionComponent,
    DssefaAlertComponent,
    DssefaCardComponent,
    CardItemComponent,
    DssefaInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule // Add MatExpansionModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
