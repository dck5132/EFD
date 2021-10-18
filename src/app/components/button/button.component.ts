import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  constructor(
    private sessionMemoryService: SessionMemoryService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  activate() {
    // console.log('Selecting a Map!');
    if (this.type === 'Map') {
      this.sessionMemoryService.selectMap();
      this.openDialog();
    }
    else {
      // console.log('Debugging only');
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }

}
