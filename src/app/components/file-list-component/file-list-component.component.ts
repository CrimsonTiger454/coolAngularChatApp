import { Component, OnInit } from '@angular/core';
import { FileModel } from '../../models/file-model.model';
import { DatCoolChatClientService } from '../../services/dat-cool-chat-client.service';

@Component({
  selector: 'app-file-list-component',
  templateUrl: './file-list-component.component.html',
  styleUrls: ['./file-list-component.component.css']
})
export class FileListComponentComponent implements OnInit {

  files: FileModel[];

  constructor(private datCoolChatService: DatCoolChatClientService) {}

  ngOnInit() {
    this.datCoolChatService.fileLockEventEmitter.subscribe(() => {
      console.log('if IsLocked = true, lock file');
      })
    }

}
