import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../../core/http/product.service';

@Component({
  selector: 'products-list-page',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss']
})
export class ProductsListPage implements OnInit {
  constructor(private productService: ProductService) {
  }

  products: Product[];
  selectedProduct: Product;
  showDialog: boolean = false;
  editMode: boolean = false;

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.products = await this.productService.get().toPromise();
  }

  onAddBtnClick() {
    this.showDialog = true;
  }

  async onSubmitDialog(event: Product) {
    if (this.editMode) {
      const product = await this.productService.put(event).toPromise();
      const idx = this.products.findIndex(p => p.id == product.id);
      this.products[idx] = product;
      this.editMode = false;
    }
    else {
      delete event.id;
      const product = await this.productService.post(event).toPromise();
      this.products.push(product);
    }
    this.showDialog = false;
  }

  onEditBtnClick(product: Product) {
    this.editMode = true;
    this.showDialog = true;
    this.selectedProduct = product;
  }

  async onDeleteBtnClick(product: Product) {
    const idx = this.products.findIndex(p => p.id == product.id);
    this.products.splice(idx, 1);
    await this.productService.delete(product.id).toPromise();
  }

  onCloseDialog() {
    console.log(1111);
    this.selectedProduct = null;
  }
}
