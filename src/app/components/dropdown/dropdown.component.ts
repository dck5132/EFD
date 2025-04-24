import { Component, input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-dropdown',
    imports: [FormsModule, MatSelectModule],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {
  // New way of input
  label = input.required<string>();
  // Older way of input
  // @Input() label: string = 'Please select your prefered raid time: ';
  options = input<string[]>([]);

  constructor(public sessionMemoryService: SessionMemoryService) { }

  ngOnInit(): void {
    this.sessionMemoryService.selectedTime.set(this.options()[0]);
  }

}
