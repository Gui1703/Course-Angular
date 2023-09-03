import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
})
export class ParentDataComponent {
  @Input() name = '';
  @Input() userData!: { email: string; role: string };
}
