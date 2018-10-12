import { TestBed, inject } from '@angular/core/testing';

import { DatCoolChatClientService } from './dat-cool-chat-client.service';

describe('DatCoolChatClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatCoolChatClientService]
    });
  });

  it('should be created', inject([DatCoolChatClientService], (service: DatCoolChatClientService) => {
    expect(service).toBeTruthy();
  }));
});
