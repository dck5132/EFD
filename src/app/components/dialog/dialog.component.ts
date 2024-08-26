import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { EmitterService } from 'src/app/services/emitter.service';
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  constructor(
    public sessionMemoryService: SessionMemoryService,
    public emitterService: EmitterService,
    public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
    this.sessionMemoryService.selectMap(true);
  }

}
