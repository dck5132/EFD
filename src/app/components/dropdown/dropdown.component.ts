import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {

  @Input() label?: string;
  @Input() options: string[] = [];

  constructor(public sessionMemoryService: SessionMemoryService) { }

  ngOnInit(): void {
    this.sessionMemoryService.selectedTime = this.options[this.options.length -1];
  }

}
