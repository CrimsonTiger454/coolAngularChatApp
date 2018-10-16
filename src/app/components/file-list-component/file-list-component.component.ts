import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../models/file-model.model';
import {DatCoolChatClientService} from '../../services/dat-cool-chat-client.service';
import {FileLockPayloadModel} from '../../models/file-lock-payload.model';
import {PayloadTypeEnum} from '../../models/payload-type.enum';

@Component({
  selector: 'app-file-list-component',
  templateUrl: './file-list-component.component.html',
  styleUrls: ['./file-list-component.component.css']
})
export class FileListComponentComponent implements OnInit {

  files: FileModel[] = [
    {
      Id: '1',
      Name: 'thing1.docx'
    },
    {
      Id: '3',
      Name: 'catinthehat.docx'
    },
    {
      Id: '2',
      Name: 'thing2.docx'
    }
  ];

  constructor(private datCoolChatService: DatCoolChatClientService) {
  }

  ngOnInit() {
    this.datCoolChatService.fileLockEventEmitter.subscribe((payload: FileLockPayloadModel) => {
      console.log('if IsLocked = true, lock file');
      this.files.forEach(
        f => {
          if (payload.FileId === f.Id) {
            f.IsLocked = payload.IsLocked;
          }
        }
      );
    });
  }

  fileClicked(event, file: FileModel) {
    console.log('file is', file);
    console.log('target value is', event.target.value);
    this.datCoolChatService.sendMessage(
      <FileLockPayloadModel>{
        PayloadType: PayloadTypeEnum.Filelock,
        FileId: file.Id,
        IsLocked: file.IsLocked
      }
    );
  }
}
