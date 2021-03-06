import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HackernewApiService } from './hackernew-api.service';
import { DomainPipe } from './domain.pipe';
import { MomentModule } from 'angular2-moment';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    routing
  ],
  providers: [ HackernewApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
