import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() appearance: string;
  @Input() type: string = 'button';
  @Input() color: string = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }
}
