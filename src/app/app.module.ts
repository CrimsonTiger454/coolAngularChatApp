import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { GlobalConnectedUsersComponent } from './components/global-connected-users/global-connected-users.component';
import { DatCoolChatClientService } from './services/dat-cool-chat-client.service';
import { TabsComponent } from './components/tabs/tabs.component';
import { FileListComponentComponent } from './components/file-list-component/file-list-component.component';
import { WhosHereTabComponent } from './components/whos-here-tab/whos-here-tab.component';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GlobalConnectedUsersComponent,
    TabsComponent,
    FileListComponentComponent,
    WhosHereTabComponent,
    ChatTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [DatCoolChatClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
