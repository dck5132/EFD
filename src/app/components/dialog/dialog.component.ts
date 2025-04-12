import { Component, ViewEncapsulation } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// Services
import { EmitterService } from 'src/app/services/emitter.service';
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-dialog',
    imports: [MatDialogModule, MatButtonModule],
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {

  constructor(
    public sessionMemoryService: SessionMemoryService,
    public emitterService: EmitterService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
    this.sessionMemoryService.selectMap(true);
  }

}
