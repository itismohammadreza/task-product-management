import { Component, OnInit } from '@angular/core';
import { Factor } from '../../../../shared/models/factor';
import { Product } from '../../../../shared/models/product';
import { FactorService } from '../../../../core/http/factor.service';

@Component({
  selector: 'factors-list-page',
  templateUrl: './factors-list.page.html',
  styleUrls: ['./factors-list.page.scss']
})
export class FactorsListPage implements OnInit {
  constructor(private factorService: FactorService) {
  }

  factors: Factor[];
  selectedFactor: Factor;
  showDialog: boolean = false;

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.factors = await this.factorService.get().toPromise();
  }

  async onDeleteBtnClick(factor: Product) {
    const idx = this.factors.findIndex(f => f.id == factor.id);
    this.factors.splice(idx, 1);
    await this.factorService.delete(factor.id).toPromise();
  }

  onShowDetailBtnClick(factor: Factor) {
    this.selectedFactor = factor;
    this.showDialog = true;
  }
}
