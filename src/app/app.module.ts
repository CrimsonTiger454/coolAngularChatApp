import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalConnectedUsersComponent } from './components/global-connected-users/global-connected-users.component';
import { DatCoolChatClientService } from './services/dat-cool-chat-client.service';

@NgModule({
  declarations: [
    AppComponent,
    GlobalConnectedUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatCoolChatClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
