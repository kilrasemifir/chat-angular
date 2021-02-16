import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { HeaderComponent } from './components/header/header.component';
import { CorrectionCatComponent } from './components/correction-cat/correction-cat.component';
import { ListeChatComponent } from './components/liste-chat/liste-chat.component';
import { CarteChatComponent } from './components/carte-chat/carte-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    HeaderComponent,
    CorrectionCatComponent,
    ListeChatComponent,
    CarteChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
