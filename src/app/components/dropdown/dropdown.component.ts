import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-dropdown',
    imports: [CommonModule, FormsModule, MatSelectModule],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {

  @Input() label?: string;
  @Input() options: string[] = [];

  constructor(public sessionMemoryService: SessionMemoryService) { }

  ngOnInit(): void {
    this.sessionMemoryService.selectedTime = this.options[0];
  }

}
