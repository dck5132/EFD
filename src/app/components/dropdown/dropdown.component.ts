import { Component, input, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-dropdown',
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule , MatSelectModule],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent {
  // Older way of input
  // @Input() label: string = 'Please select your prefered raid time: ';
  // New way of input
  label = input.required<string>();
  options = input.required<string[]>();

  constructor(public sessionMemoryService: SessionMemoryService) {}

}
