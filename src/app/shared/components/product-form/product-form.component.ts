import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ng-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {

  @Input() product: Product;
  @Output() onSubmit = new EventEmitter();

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product) {
      this.form.setValue(this.product);
    }
    else {
      this.form.reset();
    }
  }

  submit() {
    this.onSubmit.emit(this.form.value);
    this.form.reset();
  }
}
