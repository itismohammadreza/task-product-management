import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../../core/http/product.service';
import { FactorService } from '../../../../core/http/factor.service';
import { FactorRecord } from '../../../../shared/models/factor';

@Component({
  selector: 'ng-factor-modify-page',
  templateUrl: './factor-modify.page.html',
  styleUrls: ['./factor-modify.page.scss']
})
export class FactorModifyPage implements OnInit {

  constructor(private productService: ProductService,
              private factorService: FactorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  products: Product[];
  factorId: number;
  form = new FormGroup({
    id: new FormControl(),
    submitDate: new FormControl(),
    customerName: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    total: new FormControl(),
    totalDiscount: new FormControl(),
    payable: new FormControl(),
    records: new FormArray([])
  });

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.products = await this.productService.get().toPromise();
    this.factorId = +this.route.snapshot.paramMap.get('id');
    if (this.factorId) {
      const factor = await this.factorService.getById(this.factorId).toPromise();
      const records = this.form.get('records') as FormArray;
      for (const r of factor.records) {
        this.setFormArray(records, factor);
      }
      delete this.form.value.records;
      this.form.setValue(factor);
    }
  }

  addNewRecordGroup() {
    const records = this.form.get('records') as FormArray;
    this.setFormArray(records, null);
  }

  deleteRecordGroup(index: number) {
    const records = this.form.get('records') as FormArray;
    records.removeAt(index);
  }

  async onSaveBtnClick() {
    const formValue = this.form.value;
    let total: number = 0;
    let totalDiscount: number = 0;
    formValue.records.forEach(r => {
      const product = this.products.find(p => p.id == r.productId);
      r.productId = product.id;
      r.productName = product.name;
      r.unitPriceWithoutDiscount = +product.price;
      r.unitPriceWithDiscount = product.price - Math.floor((product.price * +r.discount) / 100);
      r.totalPriceWithoutDiscount = +r.count * r.unitPriceWithoutDiscount;
      r.totalPriceWithDiscount = +r.count * r.unitPriceWithDiscount;
      r.unitPriceBenefit = r.unitPriceWithoutDiscount - r.unitPriceWithDiscount;
      r.totalPriceBenefit = r.totalPriceWithoutDiscount - r.totalPriceWithDiscount;
      total += r.totalPriceWithoutDiscount;
      totalDiscount += r.totalPriceBenefit;
    });
    formValue.total = total;
    formValue.totalDiscount = totalDiscount;
    formValue.payable = total - totalDiscount;
    if (!this.factorId) {
      formValue.submitDate = new Date().toLocaleDateString('fa-Ir');
      await this.factorService.post(formValue).toPromise();
    }
    else {
      await this.factorService.put(formValue).toPromise();
    }
    this.router.navigate(['/factors']);
  }

  setFormArray(array: FormArray, value?: FactorRecord) {
    array.push(new FormGroup({
      productId: new FormControl(value?.productId),
      productName: new FormControl(value?.productName),
      count: new FormControl(value?.count),
      discount: new FormControl(value?.discount),
      unitPriceWithDiscount: new FormControl(value?.unitPriceWithDiscount),
      unitPriceWithoutDiscount: new FormControl(value?.unitPriceWithoutDiscount),
      totalPriceWithDiscount: new FormControl(value?.totalPriceWithDiscount),
      totalPriceWithoutDiscount: new FormControl(value?.totalPriceWithoutDiscount),
      unitPriceBenefit: new FormControl(value?.unitPriceBenefit),
      totalPriceBenefit: new FormControl(value?.totalPriceBenefit)
    }));
  }
}
