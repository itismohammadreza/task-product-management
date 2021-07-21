import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Factor } from '../../models/factor';

@Component({
  selector: 'ng-factor-form',
  templateUrl: './factor-form.component.html',
  styleUrls: ['./factor-form.component.scss']
})
export class FactorFormComponent implements OnChanges {

  @Input() factor: Factor;
  @Output() onSubmit = new EventEmitter();

  form = new FormGroup({
    id: new FormControl(),
    date: new FormControl(),
    customerName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    totalDiscount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    payable: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.factor) {
      this.form.setValue(this.factor);
    }
  }

  submit() {
    this.onSubmit.emit(this.form.value);
    this.form.reset();
  }
}
